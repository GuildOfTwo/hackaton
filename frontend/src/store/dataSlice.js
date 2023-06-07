import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'cards',
  initialState: {
    objects: {},
  },

  reducers: {
    setObjects(state, action) {
      state.objects = action.payload;
    },
    setComments(state, action) {
      state.comments = action.payload
    },
    setBooking(state, action) {
      state.booking = action.payload
    }

  },
});

export const { setObjects, setComments, setBooking } = dataSlice.actions;
export default dataSlice.reducer;