import { AccountStatus } from "../models/bank_account_status.enum";
import { AccountType } from "../models/bank_account_type.enum";

export class BankAccount{
        accountNumber: string;
        availableBalance: number;
        openedDate: Date; // format: yyyy-MM-dd
        accountStatus: AccountStatus; // e.g., 'ACTIVE'
        accountType: AccountType;   // e.g., 'SAVINGS'
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        address: string;

        constructor(
            accountNumber: string,
            availableBalance: number,
            openedDate: Date, // format: yyyy-MM-dd
            accountStatus: AccountStatus, // e.g., 'ACTIVE'
            accountType: AccountType,  // e.g., 'SAVINGS'
            firstName: string,
            lastName: string,
            email: string,
            phone: string,
            address: string,
        ){
            this.accountNumber = accountNumber;
            this.availableBalance = availableBalance;
            this.openedDate = openedDate;
            this.accountStatus = accountStatus;
            this.accountType = accountType;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.address = address;
        }
}