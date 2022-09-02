import { createSlice } from "@reduxjs/toolkit";

export type newReservationType = {
  reservationMembers: {
    adults: number;
    children: number;
  };
  reservationPlans: [];
  reservationDate: string;
  reservationStart: string;
  reservationEnd: string;
};

const initialState: newReservationType = {
  reservationMembers: {
    adults: 0,
    children: 0
  },
  reservationPlans: [],
  reservationDate: "",
  reservationStart: "",
  reservationEnd: ""
};

const slice = createSlice({
  name: "newReservation",
  initialState,
  reducers: {
    updateNewReservation: (state, action) => {
      return { ...state, ...action.payload };
    },
    resertNewReservation: () => {
      return initialState;
    }
  }
});

export const { updateNewReservation } = slice.actions;

export default slice.reducer;
