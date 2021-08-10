import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

import authService from "./auth.service";

import { RootState, AppDispatch } from "app/store";
import { IUser, ILoginProps } from "./auth.types";

// Action Creators / Thunks

export const login = createAsyncThunk<
  IUser,
  ILoginProps,
  { rejectValue: string }
>("auth/login", async (loginProps, { rejectWithValue }) => {
  try {
    const response = await authService.login(loginProps);
    return response;
  } catch (error) {
    // todo: typed error?
    return rejectWithValue(error.response.data.message);
  }
});

export const logout = (dispatch: AppDispatch) => {
  authService.logout();
  dispatch(authSlice.actions.logout());
};

// Initial State

const user = authService.getUser();

type AuthProps = {
  loading: "idle" | "pending" | "fulfilled";
  user: IUser | null;
};

const initialState: AuthProps = {
  loading: "idle",
  user,
};

// Slice

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.loading = "idle";
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = "idle";
      });
  },
});

export default authSlice.reducer;

// Selectors

export const authSelector = (state: RootState) => state.auth;

export const isLoadingSelector = createSelector(
  authSelector,
  (auth) => auth.loading === "pending"
);

export const isLoggedInSelector = createSelector(
  authSelector,
  (auth) => !!auth.user
);

export const userSelector = createSelector(authSelector, (auth) => auth.user);
