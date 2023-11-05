
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardReducer";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});
export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch
export const useAppDispatch: ()=> AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector