export interface WithdrawalTransaction {
  id: number;
  accountNumber: string;
  amount: number;
  timestamp: string;
  status: string;
}

export interface WithdrawRequest {
  accountNumber: string;
  amount: number;
}
