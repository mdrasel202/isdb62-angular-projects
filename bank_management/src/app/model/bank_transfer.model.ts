export interface TransferRequest{
  fromAccountId: number;
  toAccountId: number;
  amount: number;
}


export interface Transactions {
  id: number;
  amount: number;
  description: string;
  date: Date;
}
