import { useEffect, useState } from 'react';
import { MonthlyBalance } from '../api/entities/MonthlyBalances';
import { GetBalance } from '../api/GetBalance';

export function useGetBalance(): MonthlyBalance[] | undefined {
  const [balance, setBalance] = useState<MonthlyBalance[]>();
  useEffect(() => {
    async function getBalance() {
      const response = await GetBalance();
      if (response !== undefined) {
        setBalance(response as MonthlyBalance[]);
      }
    }
    getBalance();
  }, []);
  return balance;
}
