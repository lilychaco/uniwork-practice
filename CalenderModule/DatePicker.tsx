import React, { useState, useContext, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment, { Moment } from "moment";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// import { updatePickedDate } from '../../stores/schedule/schedule.ts';
// import { updateIsReady } from '../../stores/thisReservation/isReady.ts';
// import { updateThisReservaiton } from '../../stores/thisReservation/thisReservation.ts';
import { dateChecker } from "./dateChecker";
import { Context } from "./context";
import { updateNewReservation } from "../stores/newReservation";
import { updateReservationState } from "../stores/reservationState";
import type { root } from "../stores";

const styles = {
  button: {
    p: 0,
    // width: '100%',
    minWidth: 0,
    fontSize: "1.2rem"
  },
  picked: {
    ":after": {
      position: "absolute",
      content: '""',
      width: "2.8rem",
      left: "-1rem",
      top: "-0.1rem",
      height: "2.8rem",
      border: "2px solid",
      borderRadius: "8px"
    }
  }
};

const DatePicker: React.FC<{ date: Moment }> = ({ date }) => {
  // console.log(date);
  const [ne, setNew] = useState(true);
  const status = dateChecker({ date });
  const { scheduleDate } = useContext(Context);
  const { pickedDate, isReady } = useSelector((s: root) => s.reservationState);
  const dateStr = useMemo(() => date.format("YYYYMMDD"), [date, pickedDate]);
  const disabled = useMemo(
    () =>
      !scheduleDate.isSame(date, "month") ||
      date.isSameOrBefore(moment(new Date()), "day") ||
      !status,
    [dateStr, pickedDate, status]
  );
  const picked = useMemo(() => {
    if (dateStr === pickedDate) {
      return true;
    }
    return false;
  }, [dateStr, pickedDate]);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      updateReservationState({
        pickedDate: date.format("YYYYMMDD"),
        isReady: { ...isReady, reservationDate: true }
      })
    );
    dispatch(
      updateNewReservation({
        reservationDate: date.format("YYYYMMDD")
      })
    );
  };

  return (
    <Button
      disabled={disabled}
      onClick={handleClick}
      sx={
        picked ? { ...styles.button, ...styles.picked } : { ...styles.button }
      }
      color={status ? "primary" : "inherit"}
    >
      <Stack>
        <Typography>{date.format("D")}</Typography>
        <Typography>{status ? "〇" : "‐"}</Typography>
      </Stack>
    </Button>
  );
};

export default DatePicker;
