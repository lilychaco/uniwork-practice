import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import settings, { settingsType } from "./settings";
import reservationState, { reservationStateType } from "./reservationState";
import newReservation, { newReservationType } from "./newReservation";

export type root = {
  settings: settingsType;
  reservationState: reservationStateType;
  newReservation: newReservationType;
};

const reducer = combineReducers({
  settings,
  reservationState,
  newReservation
});

const store = configureStore({ reducer });
export default store;
