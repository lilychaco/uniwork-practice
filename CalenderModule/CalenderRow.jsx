import React, {
  useState, useEffect, useContext, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { nanoid } from 'nanoid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import DatePicker from './DatePicker';
import { Context } from './context';
// import { setStep, setSelectionDate } from "../../stores/reservationContainer";
// import DatePicker from './DatePicker';

const styles = {
  calenderLine: {
    // width: '100%',
    display: 'grid',
    gridAutoColumns: '1fr',
    py: 0.8,

  },
  calenderRow: {
    gridRow: '1',
    textAlign: 'center',
    // width: '100%',
  },
  // dateLine: {
  //   display: 'grid',
  //   gridAutoColumns: '1fr',
  //   bgcolor: '#D4D3CE',
  // },
  // weekdaysLine: {
  //   display: 'grid',
  //   gridAutoColumns: '1fr',
  //   bgcolor: '#F4F4F4',
  // },
};

// const weekdaysShort = ['日', '月', '火', '水', '木', '金', '土'];
//
// moment.locale('ja', {
//   weekdays: [
//     '日曜日',
//     '月曜日',
//     '火曜日',
//     '水曜日',
//     '木曜日',
//     '金曜日',
//     '土曜日',
//   ],
//   weekdaysShort,
// });
//
// const timeHours = {
//   dayTime: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
//   nightTime: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
// };


const CalenderRow = ({ row }) => {
  const { scheduleDate } = useContext(Context);
  const stDate = useMemo(() => (
    scheduleDate.clone().subtract(scheduleDate.get('day'), 'days')
  ));
  const rowDate = useMemo(() => (
    stDate.clone().add(row * 7, 'days')
  ), [row]);
  // console.log('row', row);
  // console.log('rd', rowDate);

  return (
    <Box
      bgcolor={row % 2 !== 0 ? '#D4D3CE' : '#F4F4F4'}
      sx={styles.calenderLine}
    >
      <Box sx={{ ...styles.calenderRow, gridColumn: 1 }} />
      {Array.from({ length: 7 }).map((_, i) => (
        <Box
          key={nanoid()}
          sx={{
            gridRow: '1',
            gridColumn: i + 1,
            textAlign: 'center',
          }}
        >
          <DatePicker date={rowDate.clone().add(i, 'days')} />
        </Box>
      ))}
    </Box>
  );
};


export default CalenderRow;

// <DatePicker incr={i + row * 7} stDate={stDate} />

// <DatePicker
//   date={moment(selectionDate)
//     .add(i, 'days')
//     .set({ hours, minutes: 0 })
//     .toDate()}
// />

// <Link
//   component="button"
//   variant="body2"
//   underline="none"
//   color="#575757"
//   onClick={handleRwWeek}
// >
//   <ArrowBackIosIcon>前の週</ArrowBackIosIcon>
// </Link>
