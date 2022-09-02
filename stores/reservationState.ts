import { createSlice } from "@reduxjs/toolkit";

export type reservationStateType = {
  isReady: {
    reservationDate: boolean;
    reservationStart: boolean;
    reservationEnd: boolean;
    reservationMembers: boolean;
    reservationPlan: boolean;
  };
  newWindow: boolean;
  pickedTime: {};
  activeStep: number;
  pickedDate: string;
  stepCompleted: {
    0: boolean;
    1: boolean;
    2: boolean;
    3: boolean;
  };
};

const initialState: reservationStateType = {
  isReady: {
    reservationDate: false,
    reservationStart: false,
    reservationEnd: false,
    reservationMembers: false,
    reservationPlan: false
  },
  newWindow: false,
  pickedTime: {},
  activeStep: 0,
  pickedDate: "",
  stepCompleted: {
    0: false,
    1: false,
    2: false,
    3: false
  }
};

const slice = createSlice({
  name: "reservationState",
  initialState,
  reducers: {
    updateReservationState: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateReservationState } = slice.actions;
export default slice.reducer;
