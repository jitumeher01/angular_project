import { Component, OnInit } from '@angular/core';
import {CommitService} from '../../service/commit.service';
import {LoadingService} from '../../service/loading.service';

import {Router} from '@angular/router';

import {User} from '../../model/user';
import {Commit} from '../../model/commit';
import {Growth} from '../../model/growth';

@Component({
  templateUrl: './growth.component.html',
})
export class Growthomponent implements  OnInit {
  user: User= new User();
  commit: Commit= new Commit();
  growth: Growth= new Growth();
  growths: Growth[]=[];

  constructor(private _commitService: CommitService, private _route: Router, private _loadingService: LoadingService) {}


  ngOnInit() {
    this.userGetGrowth();
  }


userGetGrowth() {
   this._loadingService.openModal();
 this._commitService.userCommit().subscribe(
    user => {
     this.user = user;
     this.userGrowthCalculate(user);
       this._loadingService.closeModal();
    },
    err => {
       this._loadingService.closeModal();
       this._route.navigate(['/logout']);
    }
  );
}

userGrowthCalculate(user:User){
    console.log('jitu kitu');
    console.log(user);
    if(this.user.commitData){
var currentDate = new Date();
var maturityDate = new Date(user.commitData.maturityDate);
var  commitDate = new Date(user.commitData.commitDate);


var duration;
if(currentDate<maturityDate){
 var timeDiff = Math.abs(currentDate.getTime() - commitDate.getTime());
 duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
 console.log(duration);
}else if(currentDate===maturityDate){
    duration=parseInt(user.commitData.planNo);
}
else if(currentDate>maturityDate){
    duration=parseInt(user.commitData.planNo);
}
        for (var i = 1; i <= duration; i++) { 
            this.growth= new Growth();
            var someDate = new Date(user.commitData.commitDate);
            var numberOfDaysToAdd = i;
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
            this.growth.id=i;
            this.growth.commitAmount=user.commitData.commitAmount;
            this.growth.growthAmount=((parseInt(user.commitData.commitAmount)*i)/100).toString();
            this.growth.totalAmount=((parseInt(user.commitData.commitAmount))+parseInt(this.growth.growthAmount)).toString();
            this.growth.commitDate=user.commitData.commitDate;
            this.growth.growthDate=someDate;
           this.growths.push(this.growth);
        }        
    }
}


}