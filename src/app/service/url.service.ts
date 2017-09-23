import { Injectable } from '@angular/core';

@Injectable()
export class UrlService{
private baseURL: string='http://54.187.210.102:8080/royallife/api/rest/';
//private baseURL: string= 'http://localhost:8080/royallife/api/rest/';

public userCommitURL: string= this.baseURL + 'user/commit';
public userAddCommitUrl: string= this.baseURL + 'user/addCommit';
public userFriendsUrl: string= this.baseURL + 'user/friend/all';


}