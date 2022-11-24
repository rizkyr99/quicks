import { createSlice } from '@reduxjs/toolkit';

const inboxSlice = createSlice({
  name: 'inbox',
  initialState: {
    value: null,
  },
  reducers: {
    setInbox(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setInbox } = inboxSlice.actions;
export default inboxSlice.reducer;
