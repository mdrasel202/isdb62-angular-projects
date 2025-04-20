export class Users{
    user_id:number;
    user_name:string;
    user_email:string;
    user_role:string

    constructor(
        user_id:number,
        user_name:string,
        user_email:string,
        user_role:string
    
    ){
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_email = user_email;
        this.user_role = user_role
    }
}