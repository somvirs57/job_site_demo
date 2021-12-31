import { createSlice, configureStore } from "@reduxjs/toolkit";

const recruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    loggedIn: false,
  },
  reducers: {
    loginUser(state) {
      state.loggedIn = true;
    },
    logoutUser(state) {
      state.loggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: recruiterSlice.reducer,
});
export default store;

export const recruiterActions = recruiterSlice.actions;
