import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {LoadingService} from '../../../service/loading.service';

import {AuthService} from '../../../auth.service';

import {Router} from '@angular/router';

import {User} from '../../../model/user';

@Component({
  templateUrl: './changepass.component.html',
})
export class ChangePasswordComponent{
  user: User= new User();
    isSubmit: boolean = false;
    errorMessage: String= '';
    successMessage: String='';
	constructor(private _userService: UserService, private _route: Router, private _authService: AuthService, private _loadingService: LoadingService) {}

	updatePassword(user: User){
      console.log(user);
	     this.isSubmit = true;
	       this._loadingService.openModal();
	     this._userService.userUpdatePassword(user)
	     .subscribe(
	    user => {
	        this.isSubmit = false;
	        this.successMessage = 'Password Update Successfully !';
	          this._loadingService.closeModal();
	       
	      },
	      err => {
	         this.isSubmit = false;
	        this.errorMessage = err;
	          this._loadingService.closeModal();

	      }
	    );
	}

	
}
