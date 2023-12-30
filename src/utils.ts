export const DAY = 24 * 3600 * 1000;

export function addDays(date: Date, days: number) {
  const d = new Date(date.valueOf());
  d.setDate(d.getDate() + days);
  return d;
}

export function getDates(begin: number, end: number) {
  const dates = [];
  let s = new Date(begin);
  s.setHours(24, 0, 0, 0);
  while (s.getTime() <= end) {
    dates.push(s.getTime());
    s = addDays(s, 1);
  }
  return dates;
}

export function formatMonth(date: Date) {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  return `${y}/${m > 9 ? m : `0${m}`}`;
}

export function formatDay(date: Date) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${m}/${d}`;
}

export function minDate(a: Date, b: Date) {
  if (a && b) {
    return a > b ? b : a;
  }
  return a || b;
}

export function maxDate(a: Date, b: Date) {
  if (a && b) {
    return a < b ? b : a;
  }
  return a || b;
}

export function p2s(arr: number[][]) {
  return arr.map((p) => `${p[0]},${p[1]}`).join(" ");
}

export function getWeekNumber(date: Date) {
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
}
