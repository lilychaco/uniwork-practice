import { createSlice } from "@reduxjs/toolkit";

export type settingsType = {
  site: "ishikawa" | "suminoe";
  siteHoliday: siteHoliday;
};

type siteHoliday = {
  weekday: {
    Mon: boolean;
    Tue: boolean;
    Wed: boolean;
    Thu: boolean;
    Fri: boolean;
    Sat: boolean;
    Sun: boolean;
  };
  // | { [key: string]: boolean };
  holiday: boolean;
  start?: string;
  end?: string;
  otherHolidays?: string[];
  otherWorkdays?: string[];
};

const initialState: settingsType = {
  site: "ishikawa",
  siteHoliday: {
    weekday: {
      Mon: false,
      Tue: false,
      Wed: false,
      Thu: false,
      Fri: false,
      Sat: true,
      Sun: true
    },
    holiday: true,
    start: "20220801",
    end: "20220930",
    otherHolidays: [],
    otherWorkdays: ["20220502"]
  }
};

const slice = createSlice({
  name: "siteState",
  initialState,
  reducers: {
    updateSiteState: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateSiteState } = slice.actions;

export default slice.reducer;
