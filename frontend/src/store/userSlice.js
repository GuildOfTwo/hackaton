import { createSlice } from '@reduxjs/toolkit';

const userSlise = createSlice({
  name: 'user',
  initialState: {
    state: {},
  },

  reducers: {
    setData(state, action) {
      state.state = action.payload;
    },
  },
});

export const { setData } = userSlise.actions;
export default userSlise.reducer;