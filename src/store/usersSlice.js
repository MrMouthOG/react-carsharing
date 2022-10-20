import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    removeCurrentUser(state) {
      state.currentUser = null;
    },
    setUsersList(state, action) {
      state.users = action.payload;
    }
  },
});

export const { setCurrentUser, removeCurrentUser, setUsersList } = usersSlice.actions;
export default usersSlice.reducer;