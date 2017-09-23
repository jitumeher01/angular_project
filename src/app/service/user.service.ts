import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {URLS} from './url.constant';

import {BankDetail} from '../model/bankdetail';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  user: User= new User();
  bankDetails: BankDetail[]= [];

    constructor(private _http: Http) {
    }


    userLogin(credentials: User): Observable<User> {
        console.log(URLS.userLoginUrl);
        console.log(credentials);
        return this._http.post(URLS.userLoginUrl, credentials)
        .map(res => res.json())
        .catch(err => {
            return Observable.throw(err._body || 'Server Error ...');
        });
    }

    userRegister(user: User): Observable<User> {
        return this._http.post(URLS.userRegisterUrl, user)
        .map(res => res.json())
        .catch(err => {
            return Observable.throw(err._body || 'Server Error ...');
        });
    }

     userProfile(): Observable<User> {

        return this._http.get(URLS.userProfileUrl, this.getTokenHeader())
        .map(res => res.json())
        .catch(err => {
            return Observable.throw(err._body || 'Server Error ...');
        });
    }

     userUpdateProfile(user: User): Observable<User> {

        return this._http.post(URLS.userUpdateProfileUrl,user,this.getTokenHeader())
        .map(res => res.json())
        .catch(err => {
            return Observable.throw(err._body || 'Server Error ...');
        });
    }
    userUpdatePassword(user: User): Observable<string> {

        return this._http.post(URLS.userUpdatePasswordUrl,user,this.getTokenHeader())
        .map(res => res)
        .catch(err => {
            return Observable.throw(err._body || 'Server Error ...');
        });
    }


    usergetAllBankDetails(): Observable<BankDetail[]> {
                return this._http.get(URLS.userGetAllBankDetailsUrl, this.getTokenHeader())
                .map(res => res.json())
                .catch(err => {
                    return Observable.throw(err._body || 'Server Error ...');
                });
            }

            userAddBankDetails(bank: BankDetail): Observable<BankDetail[]> {
                return this._http.post(URLS.userAddBankDetailsUrl, bank, this.getTokenHeader())
                .map(res => res.json())
                .catch(err => {
                    return Observable.throw(err._body || 'Server Error ...');
                });
            }

            userdeleteBankDetail(id: number): Observable<string> {

                        return this._http.get(URLS.userdeleteBankDetailsUrl + id, this.getTokenHeader())
                        .map(res => res)
                        .catch(err => {
                            return Observable.throw(err._body || 'Server Error ...');
                        });
                    }

                    userDefaultBankDetail(id: number): Observable<string> {

                                return this._http.get(URLS.userdefaultBankDetailsUrl + id, this.getTokenHeader())
                                .map(res => res)
                                .catch(err => {
                                    return Observable.throw(err._body || 'Server Error ...');
                                });
                            }

                            userUpdateBankDetails(bank: BankDetail): Observable<BankDetail[]> {
                                return this._http.post(URLS.userUpdateBankDetailsUrl, bank, this.getTokenHeader())
                                .map(res => res)
                                .catch(err => {
                                    return Observable.throw(err._body || 'Server Error ...');
                                });
                            }


    getTokenHeader(): any{
       let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Accept': 'application/json' });
        headers.append('token', `${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return options;
   };





}