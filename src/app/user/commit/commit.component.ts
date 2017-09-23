import { Component, OnInit } from '@angular/core';
import {CommitService} from '../../service/commit.service';
import {LoadingService} from '../../service/loading.service';

import {Router} from '@angular/router';

import {User} from '../../model/user';
import {Commit} from '../../model/commit';

@Component({
  templateUrl: './commit.component.html',
})
export class CommitComponent implements  OnInit {
  user: User= new User();
  commit: Commit= new Commit();

  


  cPlan = [
    {id: '15DAYS', name: '15 Days Plan'},
    {id: '30DAYS', name: '30 Days Plan'}
  ];

  cAmount = [
    {'amount': '1000'},
    {'amount': '2000'},
    {'amount': 3000},
    {'amount': 4000},
    {'amount': 5000},
    {'amount': 6000},
    {'amount': 7000},
    {'amount': 8000},
    {'amount': 9000},
    {'amount': 10000}
  ];

  constructor(private _commitService: CommitService, private _route: Router, private _loadingService: LoadingService) {}


  ngOnInit() {
this.userGetCommit();
  }


userGetCommit() {
   this._loadingService.openModal();
 this._commitService.userCommit().subscribe(
    user => {
     this.user = user;
      console.log(user.commitData);
       this._loadingService.closeModal();
      if(user.commitData){
      console.log('jitu');
      }
    },
    err => {
      console.log(err);
       this._loadingService.closeModal();
 this._route.navigate(['/logout']);
    }
  );
}

userAddCommit() {
    console.log(this.commit);
     this._loadingService.openModal();
   this._commitService.userAddCommit(this.commit).subscribe(
    user => {
     this.user = user;
      console.log(user);
       this._loadingService.closeModal();
    },
    err => {
      console.log(err);
 this._loadingService.closeModal();
  this._route.navigate(['/logout']);
    }
  );
}


}