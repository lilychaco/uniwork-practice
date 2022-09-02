import React, {
  useState, useEffect, useContext, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { nanoid } from 'nanoid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const styles = {
  day: {
    gridRow: '1',
    textAlign: 'center',

  },
  calenderLine: {
    // width: '100%',
    display: 'grid',
    gridAutoColumns: '1fr',
    py: 0.5,
    bgcolor: '#D4D3CE',
  },
};

const weekdaysShort = ['日', '月', '火', '水', '木', '金', '土'];

const DayRow = () => (
  <Box
    sx={styles.calenderLine}
  >
    <Box sx={{ gridRow: '1', gridColumn: 1 }} />
    {weekdaysShort.map((d, i) => (
      <Box
        key={nanoid()}
        sx={{ ...styles.day, gridColumn: i + 1 }}
      >
        <Typography>
          {d}
        </Typography>
      </Box>
    ))}
  </Box>
);


export default DayRow;

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
