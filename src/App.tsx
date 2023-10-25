import React from 'react';
import styled from 'styled-components';
import { useGetBalance } from './hooks/useGetBalance';
import BalanceTable from './components/BalanceTable';

const BalanceSheetContainer = styled.div`
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

const BankBalanceSheetView: React.FC = () => {
  const balance = useGetBalance();
  return (
    <BalanceSheetContainer>
      <h2>Bank Balance Sheet</h2>
      <Section>
        <h3>Monthly Balance</h3>
        <BalanceTable balance={balance} />
      </Section>
    </BalanceSheetContainer>
  );
};

export default BankBalanceSheetView;
