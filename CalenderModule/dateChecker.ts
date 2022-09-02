import { useSelector } from "react-redux";
import moment, { Moment } from "moment";
import JapaneseHolidays from "japanese-holidays";
import type { root } from "../stores";

export const dateChecker = ({ date }: { date: Moment }) => {
  const { weekday, holiday, start, end, otherWorkdays, otherHolidays } =
    useSelector((s: root) => s.settings.siteHoliday);
  console.log(weekday, holiday, otherWorkdays, otherHolidays, start, end);
  //   start date check
  if (start !== undefined) {
    if (date.isBefore(moment(start), "day")) {
      return false;
    }
  }
  //   end date check
  if (end !== undefined) {
    if (date.isAfter(moment(end), "day")) {
      return false;
    }
  }
  //   extra workday check
  if (otherWorkdays !== undefined) {
    const dateStr = date.format("YYYYMMDD");
    if (otherWorkdays.includes(dateStr)) {
      return true;
    }
  }
  //   extra holiday check
  if (otherHolidays !== undefined) {
    const dateStr = date.format("YYYYMMDD");
    if (otherHolidays.includes(dateStr)) {
      return false;
    }
  }
  //   holiday check
  if (holiday) {
    const check = JapaneseHolidays.isHoliday(date.toDate());
    if (check) {
      return true;
    }
  }
  //   weekday check
  const week: string = date.lang("en").format("ddd");
  const transWeek = (
    week: any
  ): "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun" => {
    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    if (!(week in weekdays)) {
      return "Mon";
    } else return week;
  };
  const key: keyof typeof weekday = transWeek(week);
  if (!weekday[key]) {
    return false;
  }
  return true;
  // console.log('wee', week);
  // console.log('day', weekday[week]);
};
