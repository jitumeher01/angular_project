import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user';
import {Commit} from '../model/commit';
import {URLS} from './url.constant';
import {AuthService} from '../../app/auth.service';
import 'rxjs/add/observable/throw';

@Injectable()
export class CommitService {
  commit: Commit= new Commit();
  user: User= new User();
    constructor( private _http: Http, private _authService: AuthService) {}

        userCommit(): Observable<User> {
                return this._http.get(URLS.userCommitURL, this._authService.getTokenHeader())
                .map(res => res.json())
                .catch(err => {
                    return Observable.throw(err._body || 'Server Error ...');
                });
            }

            userAddCommit(commit: Commit): Observable<User> {
                return this._http.post(URLS.userAddCommitUrl, commit, this._authService.getTokenHeader())
                .map(res => res.json())
                .catch(err => {
                    return Observable.throw(err._body || 'Server Error ...');
                });
            }

}