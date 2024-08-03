import axios from 'axios';
import { PriceData } from '../store/pricesSlice';

export const fetchPrices = async (symbol: string): Promise<PriceData[]> => {
  const response = await axios.get(`/api/prices/${symbol}`);
  return response.data;
};
