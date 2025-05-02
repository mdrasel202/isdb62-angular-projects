export class Bankaccount{
    account_id:number;
    account_number:string;
    account_balance:number;
    account_type:string;
    account_status:boolean;
    account_available_balance:number;
    account_date:Date;


    constructor(
    account_id:number,
    account_number:string,
    account_balance:number,
    account_type:string,
    account_status:boolean,
    account_available_balance:number,
    account_date:Date
    ){
        this.account_id = account_id;
        this.account_number = account_number;
        this.account_type = account_type;
        this.account_balance = account_balance;
        this.account_status = account_status;
        this.account_available_balance = account_available_balance;
        this.account_date = account_date
    }
}