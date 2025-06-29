export enum BankDepositStatus{
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED'
}

export interface BankDepositRequest{
    accountNumber : string;
    depositAmount : number;
    bankDepositStatus : BankDepositStatus;
}

export interface BankDepositResponse{
    id : number;
    accountNumber : string;
    depositAmount : number;
    bankDepositStatus : BankDepositStatus;
    depositDate : Date;
}