import React from 'react';
import styled from 'styled-components';
import { MonthlyBalance } from '../api/entities/MonthlyBalances';
import { calculateMonthlyBalances } from './calculateBalances';
import { calculateLastCumulativeBalance } from './calculateBalances';

const TableContainer = styled.div``;

const Header = styled.h3`
  display: flex;
  padding: 1rem 0;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const CumulativeBalance = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.p`
  display: none;
`;
const Month = styled(Date)``;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
`;

const Span = styled(LeftColumn)`
  font-size: 2rem;
`;

const RightColumn = styled(LeftColumn)`
  align-items: flex-start;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #edf1f4;
  &:nth-child(4),
  &:last-child {
    text-align: end;
  }
`;

const Td = styled.td`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #f5f8fa;
  &:nth-child(4),
  &:last-child {
    text-align: end;
  }
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
        <Header>
          <RightColumn>
            <Span>Premier Checking</Span>
            Checking *3875
          </RightColumn>
          {lastCumulativeBalance ? (
            <CumulativeBalance>
              <Date>{lastCumulativeBalance.date}</Date>
              <Month>{lastCumulativeBalance.month}</Month>
              <LeftColumn>
                Available Balance:
                <Span>€ {lastCumulativeBalance.amount}</Span>
              </LeftColumn>
            </CumulativeBalance>
          ) : (
            <p>No data available</p>
          )}
        </Header>
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
