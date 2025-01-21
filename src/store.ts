import { configureStore } from "@reduxjs/toolkit";
import ShipReducer from "./widgets/ShipList/model/slice";

export const store = configureStore({
  reducer: {
    ships: ShipReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
