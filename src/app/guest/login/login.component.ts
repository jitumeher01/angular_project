import { Component } from '@angular/core';
import {UserService} from '../../service/user.service';
import {LoadingService} from '../../service/loading.service';

import {AuthService} from '../../auth.service';

import {Router} from '@angular/router';

import {User} from '../../model/user';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
    user: User= new User();
    errorMessage: String= '';
   constructor(
    private _userService: UserService,
    private _route: Router, private _authService: AuthService,
    private _loadingService: LoadingService
    ) { }

   login(user: User) {
     this._loadingService.openModal();
     this._userService.userLogin(user)
    .subscribe(
      user => {
        localStorage.setItem('token', user.token);
        localStorage.setItem('userId', user.userId);
        if (user.commitData !== null) {
          localStorage.setItem('commit', 'true');
        }
        this._authService.setIsloggedIn(true);
        console.log(user);
       this._loadingService.closeModal();
        this._route.navigate(['user/dashboard']);
      },
      err => {
        console.log(err);
        this.errorMessage= err;
        this._loadingService.closeModal();
      }
    );
  }


}
