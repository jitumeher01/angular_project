import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {LoadingService} from '../../service/loading.service';

import {AuthService} from '../../auth.service';

import {Router} from '@angular/router';

import {User} from '../../model/user';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements  OnInit{
  user: User= new User();

   constructor(private _userService: UserService, private _route: Router, private _authService: AuthService, private _loadingService: LoadingService) {
  }

	ngOnInit(){
      this._loadingService.openModal();
	  this._userService.userProfile()
	    .subscribe(
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
