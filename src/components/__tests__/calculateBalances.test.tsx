import { MonthlyBalance } from '../../api/entities/MonthlyBalances';
import { calculateMonthlyBalances, calculateLastCumulativeBalance } from '../calculateBalances';
import '@testing-library/jest-dom';

type Month = {
  amount: number;
  month: string;
  date: string;
};

describe('calculateMonthlyBalances', () => {
  it('calculates monthly balances correctly', () => {
    // Mocked data
    const data: MonthlyBalance[] = [
      {
        id: 1,
        month: 'January',
        transactions: [
          {
            description: 'Payroll deposit',
            type: 'Credit',
            amount: 2200.0,
            date: '01.15.2023',
          },
        ],
      },
    ];

    const expected: Month[] = [
      {
        amount: 2200.0,
        month: 'January',
        date: '01.15.2023',
      },
    ];

    const result = calculateMonthlyBalances(data);

    expect(result).toEqual(expected);
  });
});

describe('calculateLastCumulativeBalance', () => {
  it('calculates last cumulative balance correctly', () => {
    // Mocked data
    const data: MonthlyBalance[] = [
      {
        id: 1,
        month: 'January',
        transactions: [
          {
            description: 'Payroll deposit',
            type: 'Credit',
            amount: 2200.0,
            date: '01.15.2023',
          },
        ],
      },
    ];

    const expected: Month | null = {
      amount: 2200.0, // The last cumulative balance
      month: 'January',
      date: '01.15.2023',
    };

    const result = calculateLastCumulativeBalance(data);

    expect(result).toEqual(expected);
  });
});
