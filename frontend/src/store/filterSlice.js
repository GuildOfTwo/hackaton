import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    state: {},
  },

  reducers: {
    setFilters(state, action) {
    //   state.state = action.payload;
    console.log(state)
    console.log(action)
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;