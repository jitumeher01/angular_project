import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {LoadingService} from '../../../service/loading.service';

import {AuthService} from '../../../auth.service';

import {Router} from '@angular/router';

import {User} from '../../../model/user';

@Component({
  templateUrl: './editprofile.component.html',
})
export class EditProfileComponent implements  OnInit{
  user: User= new User();
    isSubmit: boolean = false;
    errorMessage: String= '';
    successMessage: String='';
	constructor(private _userService: UserService, private _route: Router, private _authService: AuthService, private _loadingService: LoadingService) {
  }

	ngOnInit(){
 this._loadingService.openModal();
	  this._userService.userProfile()
	    .subscribe(
	      user => {
	       this.user=user;
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

	updateProfile(user: User){
	      this._loadingService.openModal();
	     this.isSubmit=true;
	     this._userService.userUpdateProfile(user)
	     .subscribe(
	      res => {
	       this.user=user;
	        this.isSubmit=false;
	         this._loadingService.closeModal();
	        this.successMessage ='Profile Update Successfully !';
	       
	      },
	      err => {
	        console.log(err);
	         this._loadingService.closeModal();
	         this._route.navigate(['/logout']);

	      }
	    );
	}

	
}
