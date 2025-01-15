import type { Schedule } from "../schedule";
import { WcGanttSettings } from "../settings";

export function getSortedItems(s: WcGanttSettings, schedule: Schedule) {
  switch (s.sortActivities) {
    case "default":
      return schedule.items;
    case "finish":
      return [...schedule.items].sort(
        (a, b) => a.earlyFinish.getTime() - b.earlyFinish.getTime()
      );
    case "start":
      return [...schedule.items].sort(
        (a, b) => a.earlyStart.getTime() - b.earlyStart.getTime()
      );
  }
}
