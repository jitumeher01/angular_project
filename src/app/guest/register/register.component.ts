import { Component } from '@angular/core';
import {UserService} from '../../service/user.service';
import {LoadingService} from '../../service/loading.service';

import {AuthService} from '../../auth.service';

import {Router} from '@angular/router';

import {User} from '../../model/user';

@Component({
  templateUrl: './register.component.html',
})
export class RegisterComponent  {

	 user: User= new User();
    errorMessage: String= '';
    successMessage: String='';
     constructor(private _userService: UserService, private _route: Router, private _authService: AuthService, private _loadingService: LoadingService) {}


     register(user: User) {
     	console.log(user);
       this._loadingService.openModal();
     this._userService.userRegister(user)
    .subscribe(
      user => {
        this._loadingService.closeModal();
        this.successMessage="Registration Success !"
      },
      err => {
        console.log(err);
        this.errorMessage= err;
      this._loadingService.closeModal();
      }
    );
  }
}
