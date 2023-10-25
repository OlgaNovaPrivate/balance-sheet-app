export interface Transaction {
  description: string;
  type: string;
  amount: number;
  date: string;
}

export interface MonthlyBalance {
  id: number;
  month: string;
  transactions: Transaction[];
}
