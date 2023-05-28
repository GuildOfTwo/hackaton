import { createSlice } from '@reduxjs/toolkit';

const userSlise = createSlice({
  name: 'user',
  initialState: {
    user: {},
    users: {}
  },

  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
    },
    setAllUsers(state, action) {
      state.users = action.payload;
    },

  },
});

export const { setUserData, setAllUsers } = userSlise.actions;
export default userSlise.reducer;