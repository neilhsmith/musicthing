import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const sidebarOpenSelector = (state: any) => state.app.sidebarOpen;
