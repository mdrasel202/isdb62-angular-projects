export interface TransferRequest{
  fromAccountNumber: string;
  toAccountNumber: string;
  amount: number;
}


export interface Transactions {
  id: number;
  amount: number;
  description: string;
  date: Date;
}
