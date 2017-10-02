import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../model/user';
import {URLS} from '../../service/url.constant';

import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  user: User= new User();

    constructor(private _http: Http) {
    }


    userLogin(credentials: User): Observable<User> {
        console.log(URLS.userLoginUrl);
        console.log(credentials);

        let headers: Headers = new Headers();
        headers.append("Authorization", "Basic " + btoa('guru' + ":" + 'guru')); 
        headers.append("Content-Type", "application/x-www-form-urlencoded");


        return this._http.post(URLS.userLoginUrl,{'username':'jitumeher','password':'123456'} ,{headers: headers})
        .map(res =>
            console.log( res.json())
            
           )
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