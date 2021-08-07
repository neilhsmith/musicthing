import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

type AppState = {
  sidebarOpen: boolean;
  signOutModalOpen: boolean;
};

const initialState: AppState = {
  sidebarOpen: false,
  signOutModalOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openSignOutModal(state) {
      state.signOutModalOpen = true;
    },
    closeSignOutModal(state) {
      state.signOutModalOpen = false;
    },
  },
});

export const { toggleSidebar, openSignOutModal, closeSignOutModal } =
  appSlice.actions;

export default appSlice.reducer;

export const sidebarOpenSelector = (state: RootState) => state.app.sidebarOpen;
export const signOutModalOpenSelector = (state: RootState) =>
  state.app.signOutModalOpen;
