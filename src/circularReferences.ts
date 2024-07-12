import type { Schedule } from "./schedule";

export function findNotAllowedItems(s: Schedule, startId: string) {
  const notAllowedItems = getPrecedingClosures(s, startId);

  return notAllowedItems;
}

function getPrecedingClosures(s: Schedule, startId: string) {
  const notAllowedItems: Set<string> = new Set();

  for (const d of s.dependencies.filter((x) => x.successor === startId)) {
    notAllowedItems.add(d.predecessor);

    getPrecedingClosures(s, d.predecessor).forEach((x) =>
      notAllowedItems.add(x)
    );
  }

  return notAllowedItems;
}
