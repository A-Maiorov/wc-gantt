import type { Item, Schedule } from "../schedule";
import { WcGanttSettings } from "../settings";

export function getSortedItems(s: WcGanttSettings, schedule: Schedule) {
  switch (s.sortActivities) {
    case "default":
      return schedule.items;
    case "finish":
      return [...schedule.items].sort((a, b) => {
        const diff = a.earlyFinish.getTime() - b.earlyFinish.getTime();
        if (diff === 0) {
          return sortByIndex(a, b, schedule);
        }
        return diff;
      });
    case "start":
      return [...schedule.items].sort((a, b) => {
        const diff = a.earlyStart.getTime() - b.earlyStart.getTime();
        if (diff === 0) {
          return sortByIndex(a, b, schedule);
        }
        return diff;
      });
  }
}

function sortByIndex(a: Item, b: Item, schedule: Schedule) {
  const aInd = schedule.items.findIndex((x) => x.id === a.id);
  const bInd = schedule.items.findIndex((x) => x.id === b.id);

  return aInd - bInd;
}
