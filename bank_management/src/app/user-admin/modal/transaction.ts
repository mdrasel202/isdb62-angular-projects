export class Transaction{
    tranaction_id:number;
    tranaction_date:Date;
    tranaction_from:String;
    tranaction_amount:number;
    tranaction_account:string;
    tranaction_status:string;
    tranaction_payment:string

    constructor(
        tranaction_id:number,
        tranaction_date:Date,
        tranaction_from:String,
        tranaction_amount:number,
        tranaction_account:string,
        tranaction_status:string,
        tranaction_payment:string
    ){
        this.tranaction_id = tranaction_id;
        this.tranaction_date = tranaction_date;
        this.tranaction_from = tranaction_from;
        this.tranaction_amount = tranaction_amount;
        this.tranaction_account = tranaction_account;
        this.tranaction_status = tranaction_status;
        this.tranaction_payment = tranaction_payment
    }
}