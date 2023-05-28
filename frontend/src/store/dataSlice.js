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
    }

  },
});

export const { setObjects, setComments } = dataSlice.actions;
export default dataSlice.reducer;