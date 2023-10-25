import React, { Fragment } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/theme/globalStyles';
import { useGetBalance } from './hooks/useGetBalance';
import BalanceTable from './components/BalanceTable';

const BalanceSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 6rem;
`;

const BankBalanceSheetView: React.FC = () => {
  const balance = useGetBalance();
  return (
    <Fragment>
      <GlobalStyle />
      <BalanceSheetContainer>
        <BalanceTable balance={balance} />
      </BalanceSheetContainer>
    </Fragment>
  );
};

export default BankBalanceSheetView;
