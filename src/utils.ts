export const MsInDAY = 24 * 3600 * 1000;

export function addDays(date: Date, days: number) {
  const d = new Date(date.valueOf());
  d.setDate(d.getDate() + days);
  return d;
}

export function getDates(begin: number, end: number) {
  const dates = [];
  let s = new Date(begin);
  s.setHours(1, 0, 0, 0);
  while (s.getTime() <= end) {
    dates.push(s.getTime());
    s = addDays(s, 1);
  }
  return dates;
}

export function getWeeks(begin: Date, end: Date) {
  const dates: Date[] = [];

  let s = new Date(begin.getFullYear(), begin.getMonth(), begin.getDate(), 1);
  const day = s.getDay();
  if (day !== 1) s.setDate(s.getDate() - day + 1); //week starts on Monday
  dates.push(new Date(s.getTime()));

  let e = new Date(end.getFullYear(), end.getMonth(), end.getDate(), 1);
  const eDay = e.getDay();
  if (eDay !== 1) e.setDate(e.getDate() + (7 - eDay)); //week starts on Monday
  dates.push(new Date(e.getTime()));

  while (s < e) {
    s.setDate(s.getDate() + 7);

    dates.push(new Date(s.getTime()));
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
  const startDate = new Date(date.getFullYear(), 0, 1);
  let days = Math.floor(
    (date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)
  );

  const n = Math.ceil(days / 7);

  return n + 1;
}
