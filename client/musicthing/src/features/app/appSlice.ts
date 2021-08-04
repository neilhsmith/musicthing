import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

type AppState = {
  sidebarOpen: boolean;
};

const initialState: AppState = {
  sidebarOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { toggleSidebar } = appSlice.actions;

export default appSlice.reducer;

export const sidebarOpenSelector = (state: RootState) => state.app.sidebarOpen;
