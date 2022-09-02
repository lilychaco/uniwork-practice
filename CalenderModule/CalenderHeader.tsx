import React, { useState, useEffect, useContext } from "react";
// import { useSelector, useDispatch } from 'react-redux';
import moment from "moment";
// import { nanoid } from 'nanoid';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { Context } from "./context";

const CalenderHeader: React.FC = () => {
  const [rwCheck, setRwCheck] = useState(true);
  const { scheduleDate, setScheduleDate } = useContext(Context);

  useEffect(() => {
    const thisDate = moment();
    setRwCheck(thisDate.add(1, "months").isAfter(scheduleDate, "month"));
  }, [scheduleDate]);

  const handleFf = () => {
    const ffObj = scheduleDate.clone().add(1, "months");
    setScheduleDate(ffObj);
  };
  const handleRw = () => {
    const rwObj = scheduleDate.clone().subtract(1, "months");
    setScheduleDate(rwObj);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ textAlign: "left" }}>
        <Button
          disabled={rwCheck}
          onClick={handleRw}
          startIcon={<KeyboardArrowLeft />}
        >
          前の月
        </Button>
      </Box>
      <Box sx={{ textAlign: "center", flexGrow: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {scheduleDate.get("year")}年{scheduleDate.get("month") + 1}月
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Button onClick={handleFf} endIcon={<KeyboardArrowRight />}>
          次の月
        </Button>
      </Box>
    </Box>
  );
};

export default CalenderHeader;
