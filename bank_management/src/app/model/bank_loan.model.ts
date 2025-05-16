export enum LoanStatus{
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    PAID = 'PAID'
}

export interface LoanRequest{ 
    userId : number;
    accountNumber: string;
    amount: number;
    interestRate:number;
    dueDate: Date;
}



export class LoneResponse {
    userId : number;
    accountNumber : string;
    amount : number;
    approvedAmount: number;
    availableAmount: number;
    interestRate: number;
    dueDate: Date;
    acceptDate: Date;
    status: LoanStatus;

    constructor(
        userId : number,
        accountNumber : string,
        amount : number,
        approvedAmount: number,
        availableAmount: number,
        interestRate: number,
        dueDate: Date,
        acceptDate: Date,
        status: LoanStatus,
    ){
        this.userId = userId;
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.approvedAmount = approvedAmount;
        this.availableAmount = availableAmount;
        this.interestRate = interestRate;
        this.dueDate = dueDate;
        this.acceptDate = acceptDate;
        this.status = status;
    }
}
