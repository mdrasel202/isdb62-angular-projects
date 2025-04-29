export class Cards{
    account_id:number;
    card_number:string;
    card_type:string;
    expiry_date:Date;
    is_active:Boolean

    constructor(
        account_id:number,
        card_number:string,
        card_type:string,
        expiry_date:Date,
        is_active:Boolean
    ){
        this.account_id = account_id;
        this.card_number = card_number;
        this.card_type = card_type;
        this.expiry_date = expiry_date;
        this.is_active = is_active
    }
}