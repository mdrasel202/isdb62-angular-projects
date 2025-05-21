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
    loanId : number;
    amount : number;
    approvedAmount: number;
    interestRate:number;
    availableAmount: number;
    dueDate: Date;
    acceptDate: Date;
    status: LoanStatus;
    applicationDate:Date;
    monthlyInterest:number;
    yearLyInterest:number;

    constructor(
        loanId : number,
        amount : number,
        approvedAmount: number,
        interestRate:number,
        availableAmount: number,
        dueDate: Date,
        acceptDate: Date,
        status: LoanStatus,
        applicationDate:Date,
        monthlyInterest:number,
        yearLyInterest:number,
    ){
        this.loanId = loanId;
        this.amount = amount;
        this.approvedAmount = approvedAmount;
        this.interestRate = interestRate;
        this.availableAmount = availableAmount;
        this.dueDate = dueDate;
        this.acceptDate = acceptDate;
        this.status = status;
        this.applicationDate = applicationDate;
        this.monthlyInterest = monthlyInterest;
        this.yearLyInterest = yearLyInterest;
    }
}
