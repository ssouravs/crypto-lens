import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PriceData {
  name: string;
  symbol: string;
  price: number;
  timestamp: string;
}

interface PricesState {
  currentSymbol: string;
  data: PriceData[];
}

const initialState: PricesState = {
  currentSymbol: 'BTC',
  data: [],
};

const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setPrices(state, action: PayloadAction<PriceData[]>) {
      state.data = action.payload;
    },
    setCurrentSymbol(state, action: PayloadAction<string>) {
      state.currentSymbol = action.payload;
    },
  },
});

export const { setPrices, setCurrentSymbol } = pricesSlice.actions;
export default pricesSlice.reducer;
