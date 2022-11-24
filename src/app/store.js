import { configureStore } from '@reduxjs/toolkit';
import inboxReducer from '../features/inbox/inboxSlice';
import tabsReducer from '../features/tabs/tabsSlice';

export const store = configureStore({
  reducer: {
    inbox: inboxReducer,
    tabs: tabsReducer,
  },
});
