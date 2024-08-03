import { configureStore } from '@reduxjs/toolkit';
import pricesReducer from './pricesSlice';

const store = configureStore({
  reducer: {
    prices: pricesReducer,
  },
});

store.subscribe(() => {
  // Save state to local storage if needed
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
