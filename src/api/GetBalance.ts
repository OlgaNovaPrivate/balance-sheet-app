import axios from 'axios';
import { MonthlyBalance } from './entities/MonthlyBalances';

export async function GetBalance(): Promise<MonthlyBalance[] | undefined> {
  return await axios
    .get<MonthlyBalance[]>('http://localhost:3002/monthlyBalances')
    .then((response) => {
      if (response.data) {
        return response.data;
      }
      return undefined;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      return undefined;
    });
}
