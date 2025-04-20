export class Product{
    product_id:number;
    product_name:string;
    product_category:string;
    product_expire:Date;
    product_price:number;
    product_stock:number;
    product_status:string

    constructor(
        product_id:number,
        product_name:string,
        product_category:string,
        product_expire:Date,
        product_price:number,
        product_stock:number,
        product_status:string
    ){
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_category = product_category;
        this.product_expire = product_expire;
        this.product_price = product_price;
        this.product_stock = product_stock;
        this.product_status = product_status
    }
}