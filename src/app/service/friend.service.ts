import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {Commit} from '../model/commit';
import {URLS} from './url.constant';

import {AuthService} from '../../app/auth.service';
import 'rxjs/add/observable/throw';

@Injectable()
export class FriendService {
  user: User= new User();
    constructor(private _http: Http, private _authService: AuthService) {}



        usergetAllFriend(): Observable<User[]> {
            console.log(this._authService.getTokenHeader());
                return this._http.get(URLS.userFriendsUrl, this._authService.getTokenHeader())
                .map(res => res.json())
                .catch(err => {
                    return Observable.throw(err._body || 'Server Error ...');
                });
            }

}