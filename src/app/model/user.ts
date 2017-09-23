import {TokenData} from './token.data';
import {Commit} from './commit';
export class User {
    userId: string;
    name: string;
    mobile: string;
    email: string;
    password: string;
    rePassword: string;
    oldPassword: string;
    address: string;
    sponsorId: string;
    sponsorName: string;
    sponsorMobile: string;
    state: string;
    token: string;
    expiryDate: string;
    isComit: boolean;
    commitData: Commit;

}
