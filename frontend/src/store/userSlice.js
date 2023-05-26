import { createSlice } from '@reduxjs/toolkit';

const userSlise = createSlice({
  name: 'user',
  initialState: {
    state: {},
  },

  reducers: {
    setUserData(state, action) {
      state.state = action.payload;
    },
  },
});

export const { setUserData } = userSlise.actions;
export default userSlise.reducer;