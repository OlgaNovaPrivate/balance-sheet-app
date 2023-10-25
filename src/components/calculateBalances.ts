import { MonthlyBalance } from '../api/entities/MonthlyBalances';

type Month = {
  amount: number;
  month: string;
  date: string;
};

export function calculateMonthlyBalances(data: MonthlyBalance[]): Month[] {
  const monthlyBalances: Month[] = [];
  let index = 0;
  data?.forEach((monthData) => {
    monthData.transactions.forEach((transaction) => {
      monthlyBalances.push({ date: transaction.date, month: monthData.month, amount: 0 });
      const previousBalance = monthlyBalances[index === 0 ? index : index - 1].amount;
      monthlyBalances[index].amount += previousBalance;
      monthlyBalances[index].amount += transaction.amount;
      index++;
    });
  });
  return monthlyBalances;
}

export function calculateLastCumulativeBalance(data: MonthlyBalance[]): Month | null {
  const monthlyBalances: Month[] = [];
  let cumulativeBalance = 0;

  data?.forEach((monthData) => {
    monthData.transactions.forEach((transaction) => {
      cumulativeBalance += transaction.amount;
      monthlyBalances.push({
        date: transaction.date,
        month: monthData.month,
        amount: cumulativeBalance,
      });
    });
  });
  if (monthlyBalances.length > 0) {
    return monthlyBalances[monthlyBalances.length - 1];
  } else {
    return null;
  }
}
