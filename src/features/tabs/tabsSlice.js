import { createSlice } from '@reduxjs/toolkit';

const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    value: null,
  },
  reducers: {
    changeTabs: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTabs } = tabsSlice.actions;
export default tabsSlice.reducer;
