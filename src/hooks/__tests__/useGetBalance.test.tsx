import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useGetBalance } from '../useGetBalance';
import { MonthlyBalance } from '../../api/entities/MonthlyBalances';
import '@testing-library/jest-dom';

const mockAxios = new MockAdapter(axios);

// Mocked data
const mockedBalanceData = [
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

test('useGetBalance returns the balance correctly', async () => {
  mockAxios.onGet('http://localhost:3002/monthlyBalances').reply(200, mockedBalanceData);

  let result: MonthlyBalance[] | undefined = undefined;

  const TestComponent: React.FC = () => {
    result = useGetBalance();
    return null;
  };

  render(<TestComponent />);

  await waitFor(() => {
    expect(result).toEqual(mockedBalanceData);
  });
});

afterEach(() => {
  mockAxios.reset();
});

afterAll(() => {
  mockAxios.restore();
});
