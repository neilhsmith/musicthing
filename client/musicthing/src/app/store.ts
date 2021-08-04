import { combineReducers, configureStore, AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import appReducer from "features/app/appSlice";
import authReducer from "features/auth/authSlice";

const reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export default store;
