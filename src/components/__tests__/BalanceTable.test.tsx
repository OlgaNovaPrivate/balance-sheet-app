import React from 'react';
import { render, screen } from '@testing-library/react';
import BalanceTable, { BalanceTableProps } from '../BalanceTable';
import '@testing-library/jest-dom';

// Mocked data
const mockData: BalanceTableProps = {
  balance: [
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
  ],
};

test('it renders with data', () => {
  render(<BalanceTable balance={mockData.balance} />);

  const payrollDepositElement = screen.getByText('Payroll deposit');
  expect(payrollDepositElement).toBeInTheDocument();
});

test('it renders without data', () => {
  const emptyData: BalanceTableProps = {
    balance: undefined,
  };

  render(<BalanceTable balance={emptyData.balance} />);
  const noDataElement = screen.getByText('No data available');
  expect(noDataElement).toBeInTheDocument();
});
