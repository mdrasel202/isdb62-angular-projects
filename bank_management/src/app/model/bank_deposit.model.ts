export enum BankDepositStatus{
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    CANCELLED = 'CANCELLED'
}

// export enum BankDepositInterestRate {
//   TEN_PERCENT = '10%',
//   FIFTEEN_PERCENT = '15%',
//   TWENTY_PERCENT = '20%'
// }

export interface BankDepositRequest{
    accountNumber : string;
    depositAmount : number;
    bankDepositInterestRate : string;
    bankDepositStatus? : BankDepositStatus;
}

export interface BankDepositResponse{
    id : number;
    accountNumber : string;
    depositAmount : number;
    interestEarned : number; 
    interestRate : number;
    interestRateLabel : string;
    bankDepositStatus : BankDepositStatus;
    startDate : Date;
    maturityDatel : Date;
}