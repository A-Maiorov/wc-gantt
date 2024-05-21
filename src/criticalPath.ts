import type { WCGantt } from "./WcGantt";
import type { ComponentSettings } from "./types";
import { MsInDAY } from "./utils";

class TreeNode {
  startDate: Date = this.settings.data.find((x) => x.id === this.id).start;
  endDate: Date = this.settings.data.find((x) => x.id === this.id).end;
  get children(): TreeNode[] {
    return this.settings.links
      .filter((l) => l.source === this.id)
      .map((x) => new TreeNode(this.settings, x.target));
  }

  constructor(
    protected settings: ComponentSettings,
    public id: string | number
  ) {}
}

export function findLongestPath(
  this: WCGantt,
  i: string | number
): {
  longestDuration: number;
  path: (string | number)[];
} {
  let longestPathResult = {
    longestDuration: 0,
    path: [] as (string | number)[],
  };

  const dfs = (
    currentNodeId: string | number | null,
    path: (string | number)[],
    currentDuration: number
  ): void => {
    if (currentNodeId === null) {
      return;
    }

    const currentNode: TreeNode = new TreeNode(this.settings, currentNodeId);

    // Calculate the duration of the current node
    const nodeDuration =
      currentNode.endDate.getTime() - currentNode.startDate.getTime();
    const newDuration = currentDuration + nodeDuration;
    path.push(currentNode.id);

    if (!currentNode.children || currentNode.children.length === 0) {
      // If the current node is a leaf, check if the current path is the longest
      if (newDuration > longestPathResult.longestDuration) {
        longestPathResult.longestDuration = newDuration;
        longestPathResult.path = [...path];
      }
    } else {
      // Otherwise, continue the search for each child
      currentNode.children.forEach((child) => {
        dfs(child.id, path, newDuration);
      });
    }

    // Backtrack: remove the current node and its duration before returning
    path.pop();
  };

  // Initialize DFS from the root
  dfs(i, [], 0);

  longestPathResult.longestDuration =
    longestPathResult.longestDuration / MsInDAY;

  return longestPathResult;
}
