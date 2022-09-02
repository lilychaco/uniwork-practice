import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";

import CalenderHeader from "./CalenderHeader";
import DayRow from "./DayRow";
import Row from "./CalenderRow";
import { Provider } from "./context";
import type { root } from "../stores";

moment.locale("ja", {
  weekdays: [
    "日曜日",
    "月曜日",
    "火曜日",
    "水曜日",
    "木曜日",
    "金曜日",
    "土曜日"
  ],
  weekdaysShort: ["日", "月", "火", "水", "木", "金", "土"]
});

const DateSelector: React.FC = () => {
  const { pickedDate } = useSelector((s: root) => s.reservationState);
  // console.log('pickedDate', pickedDate);
  // console.log(new Date(pickedDate));
  const [scheduleDate, setScheduleDate] = useState(
    pickedDate !== ""
      ? moment(
          `${pickedDate.substring(0, 4)}-${pickedDate.substring(
            4,
            6
          )}-${pickedDate.substring(6, 8)}`
        ).startOf("month")
      : moment("20220401").startOf("month")
  );

  const rows = useMemo(() => {
    const end = moment(scheduleDate).endOf("month");
    const addCount = scheduleDate.get("day");
    const count = end.diff(scheduleDate, "days") + 1 + addCount;
    return Math.ceil(count / 7);
  }, [scheduleDate]);

  return (
    <Provider
      value={{
        scheduleDate,
        setScheduleDate
      }}
    >
      <Box>
        <CalenderHeader />
        <DayRow />
        {Array.from({ length: rows }).map((_, i) => (
          <Row row={i} key={nanoid()} />
        ))}
      </Box>
    </Provider>
  );
};

export default DateSelector;
