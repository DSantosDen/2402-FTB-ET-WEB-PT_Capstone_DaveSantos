import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    token: localStorage.getItem("token") || null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    removeToken(state, action) {
      state.token = null;
    },
    setUserID(state, action) {
      state.userId = action.payload;
    },
  },
});

export const { setToken, removeToken, setUserID } = userSlice.actions;
export default userSlice.reducer;
