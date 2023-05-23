import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'cards',
  initialState: {
    state: {},
  },

  reducers: {
    setData(state, action) {
      state.state = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;