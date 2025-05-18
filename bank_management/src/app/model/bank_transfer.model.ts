export interface TransferRequest{
  fromAccountId: number;
  toAccountId: number;
  amount: number;
}


export interface Transaction {
  id: number;
  amount: number;
  description: string;
  date: Date;
}
