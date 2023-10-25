import axios from 'axios';
import { GetBalance } from '../GetBalance';
import { MonthlyBalance } from '../../api/entities/MonthlyBalances';

jest.mock('axios');

describe('GetBalance', () => {
  it('fetches monthly balances successfully', async () => {
    const mockData: MonthlyBalance[] = [
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

    // jest.spyOn is used to mock the axios.get function
    const axiosGetSpy = jest.spyOn(axios, 'get');
    axiosGetSpy.mockResolvedValue({ data: mockData });

    const result = await GetBalance();

    expect(result).toEqual(mockData);

    axiosGetSpy.mockRestore();
  });

  it('handles API errors', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    axiosGetSpy.mockRejectedValue(new Error('API Error'));

    const result = await GetBalance();

    expect(result).toBeUndefined();

    axiosGetSpy.mockRestore();
  });
});
