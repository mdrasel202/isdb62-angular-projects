export interface CardRequest{
    bankAccountId : number;
    cardType : 'VISA' | 'MASTERCARD' | 'DEBIT' | 'CREDIT';
    status?: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export interface CardResponse{
    cardNumber: string;
    cardType: 'VISA' | 'MASTERCARD' | 'DEBIT' | 'CREDIT';
    cardStatus: 'PENDING' | 'APPROVED' | 'REJECTED';
    expiry_date: Date;
    id: number;
    availableBalance: number;
    accountId : number;
    openedDate : Date;
    status : 'PENDING' | 'APPROVED' | 'REJECTED';
}

export interface GetAllInfo{
    id : number;
    cardNumber : string;
    cardType : 'VISA' | 'MASTERCARD' | 'DEBIT' | 'CREDIT';
    status : 'PENDING' | 'APPROVED' | 'REJECTED';
    openedDate : Date;
    availableBalance : number;
}