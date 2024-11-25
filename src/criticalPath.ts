import dayjs from "dayjs";
import type { IDependency, Schedule } from "./schedule";

import { MsInDAY } from "./utils";

class TreeNode {
  startDate: Date = this.schedule.itemsIndex.get(this.id).earlyStart;
  endDate: Date = this.schedule.itemsIndex.get(this.id).earlyFinish;
  get children(): TreeNode[] {
    return this.schedule.dependencies
      .filter((l) => l.predecessor === this.id)
      .filter((l) => {
        const current = this.schedule.itemsIndex.get(this.id);

        const currentEndWithLag = dayjs(current.earlyFinish)
          .add(l.lag, "days")
          .toDate()
          .setHours(0, 0, 0, 0);

        const successorDate = this.__getSucDate(l).setHours(0, 0, 0, 0);

        const diff = successorDate - currentEndWithLag;
        const isConsequent = diff === 1 || diff === 0;
        if (isConsequent) return true;

        const successor = this.schedule.itemsIndex.get(l.successor);
        const isGapIncludingOnlyFreeDays =
          successor.getNextWorkingDay(new Date(currentEndWithLag)).getTime() ===
          successorDate;

        return isGapIncludingOnlyFreeDays;
      })
      .map((x) => new TreeNode(this.schedule, x.successor));
  }

  private __getSucDate(l: IDependency) {
    const successor = this.schedule.itemsIndex.get(l.successor);
    if (l.type.endsWith("F")) return successor.earlyFinish;

    if (l.type.endsWith("S")) return successor.earlyStart;
  }

  constructor(protected schedule: Schedule, public id: string) {}
}

export function findLongestPath(
  startItemId: string,
  schedule: Schedule
): {
  longestDuration: number;
  path: string[];
} {
  let longestPathResult = {
    longestDuration: 0,
    path: [] as string[],
  };

  const dfs = (
    currentNodeId: string | null,
    path: string[],
    currentDuration: number
  ): void => {
    if (currentNodeId === null) {
      return;
    }

    const currentNode: TreeNode = new TreeNode(schedule, currentNodeId);

    // Calculate the duration of the current node
    const nodeDuration =
      currentNode.endDate.getTime() - currentNode.startDate.getTime();
    const newDuration = currentDuration + nodeDuration;
    path.push(currentNode.id);

    if (!currentNode.children || currentNode.children.length === 0) {
      // If the current node is a leaf, check if the current path is the longest
      if (newDuration >= longestPathResult.longestDuration) {
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
  dfs(startItemId, [], 0);

  longestPathResult.longestDuration =
    longestPathResult.longestDuration / MsInDAY;

  return longestPathResult;
}
