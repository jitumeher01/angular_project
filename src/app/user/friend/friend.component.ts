import { Component, OnInit } from '@angular/core';
import {FriendService} from '../../service/friend.service';

import {Router} from '@angular/router';

import {User} from '../../model/user';
import {Commit} from '../../model/commit';

@Component({
  templateUrl: './friend.component.html',
})
export class FriendComponent implements  OnInit {
  user: User= new User();
  users: User[];
  commit: Commit= new Commit();


  constructor(private _friendService: FriendService, private _router: Router) {}


  ngOnInit() {
     this.userGetAllFriends();
  }


userGetAllFriends() {
 this._friendService.usergetAllFriend().subscribe(
    data => {
    this.users =  data;
      console.log(this.users);
    },
    err => {
      console.log(err);

    }
  );
}


}