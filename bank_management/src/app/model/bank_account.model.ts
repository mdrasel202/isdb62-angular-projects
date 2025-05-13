import { AccountStatus } from "../models/bank_account_status.enum";
import { AccountType } from "../models/bank_account_type.enum";

export class BankAccount {
//   accountNumber: string;
//   availableBalance: number;
//   openedDate: Date;
//   accountStatus: AccountStatus;
//   accountType: AccountType;
//   user: {
//     firstName: string;
//     lastName: string;
//     email: string;
//     phone: string;
//     address: string;
//   };

//   constructor() {
//     this.accountNumber = '';
//     this.availableBalance = 0;
//     this.openedDate = new Date();
//     this.accountStatus = AccountStatus.ACTIVE;
//     this.accountType = AccountType.SAVING;
//     this.user = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       address: ''
//     };
//   }
// }


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
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDay: string | null;
  address: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
  loan: any[];
}

export interface Account {
  id: number;
  accountNumber: string;
  availableBalance: number;
  status: string;
  openedDate: string;
  type: string;
  card: any[];
  transactions: any[];
  user: User;
}
