import React from 'react';
import styled from 'styled-components';
import { MonthlyBalance } from '../api/entities/MonthlyBalances';
import { calculateMonthlyBalances } from './calculateBalances';
import { calculateLastCumulativeBalance } from './calculateBalances';

const TableContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Section = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export interface BalanceTableProps {
  balance: MonthlyBalance[] | undefined;
}

const BalanceTable: React.FC<BalanceTableProps> = ({ balance }) => {
  const calculatedMonthlyBalance = calculateMonthlyBalances(balance!);
  const lastCumulativeBalance = calculateLastCumulativeBalance(balance!);
  return (
    <TableContainer>
      <Section>
        <h3>
          Summary:{' '}
          {lastCumulativeBalance ? (
            <p>
              Date: {lastCumulativeBalance.date}, Month: {lastCumulativeBalance.month}, Last Cumulative Balance:{' '}
              {lastCumulativeBalance.amount}
            </p>
          ) : (
            <p>No data available</p>
          )}
        </h3>
        <Table>
          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Balance</Th>
            </tr>
          </thead>
          <tbody>
            {balance?.map((b) => {
              return b.transactions.map((t, i) => (
                <tr key={i}>
                  <Td>{t.date}</Td>
                  <Td>{t.description}</Td>
                  <Td>{t.type}</Td>
                  <Td>{t.amount}</Td>
                  <Td>{calculatedMonthlyBalance?.find((c) => c.date === t.date)?.amount}</Td>
                </tr>
              ));
            })}
          </tbody>
        </Table>
      </Section>
    </TableContainer>
  );
};

export default BalanceTable;
