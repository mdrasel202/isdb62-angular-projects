export interface CardRequest{
    bankAccountId : number;
    cardType : 'VISA' | 'MASTERCARD' | 'DEBIT' | 'CREDIT';
}

export interface CardResponse{
    cardNumber: string;
    card: string;
    status: string;
    expiry_date: Date;
    id: number;
    availableBalance: number;
}