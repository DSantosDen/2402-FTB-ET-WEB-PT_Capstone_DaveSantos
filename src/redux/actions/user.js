import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state, action) {
      state.token = null;
    },
  },
});

export const { setToken, removeToken } = userSlice.actions;
export default userSlice.reducer;
