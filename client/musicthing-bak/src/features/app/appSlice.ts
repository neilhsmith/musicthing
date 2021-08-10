import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

type AppState = {
  sidebarOpen: boolean;
  settingsModalOpen: boolean;
  signOutModalOpen: boolean;
};

const initialState: AppState = {
  sidebarOpen: false,
  settingsModalOpen: false,
  signOutModalOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openSettingsModal(state) {
      state.settingsModalOpen = true;
    },
    closeSettingsModal(state) {
      state.settingsModalOpen = false;
    },
    openSignOutModal(state) {
      state.signOutModalOpen = true;
    },
    closeSignOutModal(state) {
      state.signOutModalOpen = false;
    },
  },
});

export const {
  toggleSidebar,
  openSettingsModal,
  closeSettingsModal,
  openSignOutModal,
  closeSignOutModal,
} = appSlice.actions;

export default appSlice.reducer;

export const sidebarOpenSelector = (state: RootState) => state.app.sidebarOpen;
export const settingsModalOpenSelector = (state: RootState) =>
  state.app.settingsModalOpen;
export const signOutModalOpenSelector = (state: RootState) =>
  state.app.signOutModalOpen;
