export interface CardRequest{
    accountNumber : string;
    cardType : 'VISA' | 'MASTERCARD' | 'DEBIT' | 'CREDIT';
    status?: 'PENDING' | 'APPROVED' | 'REJECTED';
    cardId?: number;
}

export interface CardResponse{
    cardNumber: string;
    cardType: 'VISA' | 'MASTERCARD' | 'DEBIT' | 'CREDIT';
    cardStatus: 'PENDING' | 'APPROVED' | 'REJECTED' | 'ACTIVE';
    expiry_date: Date;
    id: number;
    availableBalance: number;
    accouuserntId : number;
    openedDate : Date;
    status : 'PENDING' | 'APPROVED' | 'REJECTED';
    accountNumber:string;
}

export interface GetAllInfo{
    id : number;
    cardNumber : string;
    cardType : 'VISA' | 'MASTERCARD' | 'DEBIT' | 'CREDIT';
    status : 'PENDING' | 'APPROVED' | 'REJECTED' | 'ACTIVE';
    openedDate : Date;
    availableBalance : number;
}