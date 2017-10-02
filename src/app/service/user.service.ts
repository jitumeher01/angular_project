import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {URLS} from './url.constant';

import {BankDetail} from '../model/bankdetail';
import 'rxjs/add/observable/throw';

import {TokenData} from '../model/token.data';

@Injectable()
export class UserService {
  user: User= new User();
  token: TokenData= new TokenData();
  bankDetails: BankDetail[]= [];

    constructor(private _http: Http) {
    }


    userLogin(credentials: User): Observable<TokenData> {
       
        let headers: Headers = new Headers();
        headers.append("Authorization", 'Basic Z3VydTpndXJ1');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let options = new RequestOptions({headers: headers});

        let  body = new URLSearchParams();
        body.append('username',credentials.userId);
        body.append('password',credentials.password);
        body.append('grant_type', 'password');


        console.log(options);
        return this._http.post(URLS.userLoginUrl,body.toString(),options)
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
        let  body = new URLSearchParams();
        body.append('access_token',localStorage.getItem('access_token'));

        return this._http.get(URLS.userProfileUrl+"/"+localStorage.getItem('userId'),body.toString())
        .map(res => res.json())
        .catch(err => {
            return Observable.throw(err._body || 'Server Error ...');
        });
    }

     userUpdateProfile(user: User): Observable<User> {
        user.access_token=localStorage.getItem('access_token');
        return this._http.post(URLS.userUpdateProfileUrl,user)
        .map(res => res)
        .catch(err => {
            console.log(err);
            return Observable.throw(err._body || 'Server Error ...');
        });
    }
    userUpdatePassword(user: User): Observable<string> {
        user.access_token=localStorage.getItem('access_token');
        user.userId=localStorage.getItem('userId');
        return this._http.post(URLS.userUpdatePasswordUrl,user)
        .map(res => res)
        .catch(err => {
            return Observable.throw(err._body || 'Server Error ...');
        });
    }


    usergetAllBankDetails(): Observable<BankDetail[]> {
        let  body = new URLSearchParams();
        body.append('access_token',localStorage.getItem('access_token'));
                return this._http.get(URLS.userGetAllBankDetailsUrl+"/"+localStorage.getItem('userId'),body.toString())
                .map(res => res.json())
                .catch(err => {
                    return Observable.throw(err._body || 'Server Error ...');
                });
            }

            userAddBankDetails(bank: BankDetail): Observable<BankDetail[]> {
                bank.userId=localStorage.getItem('userId');
                bank.access_token=localStorage.getItem('access_token');
                return this._http.post(URLS.userAddBankDetailsUrl, bank)
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
       let authToken = localStorage.getItem('access_token');
        let headers = new Headers({ 'Accept': 'application/json' });
        headers.append('token', `${authToken}`);

        let options = new RequestOptions({ headers: headers });
        return options;
   };





}