


export interface AccountRequest{
  userId : number;
  type : 'SAVING' | 'CURRENT';
  name : string;
  balance : number;
  requestDate : Date;
}

export interface AccountResponce{
    id : number;
    accountNumber : string;
    userId : number;
    userName : string;
    type : 'SAVING' | 'CURRENT';
    status :  'ACTIVE' | 'INACTIVE' | 'SUSPEND' | 'REQUESTED';
    availableBalance : number;
    openedDate : Date;
}

// export class BankAccount {
//         accountNumber: string;
//         availableBalance: number;
//         openedDate: Date; // format: yyyy-MM-dd
//         accountStatus: AccountStatus; // e.g., 'ACTIVE'
//         accountType: AccountType;   // e.g., 'SAVINGS'
//         firstName: string;
//         lastName: string;
//         email: string;
//         phone: string;
//         address: string;

//         constructor(
//             accountNumber: string,
//             availableBalance: number,
//             openedDate: Date, // format: yyyy-MM-dd
//             accountStatus: AccountStatus, // e.g., 'ACTIVE'
//             accountType: AccountType,  // e.g., 'SAVINGS'
//             firstName: string,
//             lastName: string,
//             email: string,
//             phone: string,
//             address: string,
//         ){
//             this.accountNumber = accountNumber;
//             this.availableBalance = availableBalance;
//             this.openedDate = openedDate;
//             this.accountStatus = accountStatus;
//             this.accountType = accountType;
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.email = email;
//             this.phone = phone;
//             this.address = address;
//         }
// }


// export interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   birthDay: string | null;
//   address: string | null;
//   role: string;
//   createdAt: string;
//   updatedAt: string;
//   loan: any[];
// }

// //reponse
// export interface Account {
//   id: number;
//   accountNumber: string;
//   availableBalance: number;
//   status: string;
//   openedDate: string;
//   type: string;
//   card: any[];
//   transactions: any[];
//   user: User;
// }
