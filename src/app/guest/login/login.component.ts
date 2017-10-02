import { Component } from '@angular/core';
import {UserService} from '../../service/user.service';
import {LoadingService} from '../../service/loading.service';

import {AuthService} from '../../auth.service';

import {Router} from '@angular/router';

import {User} from '../../model/user';
import {TokenData} from '../../model/token.data';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
    user: User= new User();
    token: TokenData= new TokenData();
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
      token => {
        console.log(user.userId);
        localStorage.setItem('userId',user.userId);
        localStorage.setItem('access_token',token.access_token);
        localStorage.setItem('refresh_token', token.refresh_token);
        localStorage.setItem('expires_in', token.expires_in);
        console.log(token);
        this._authService.setIsloggedIn(true);
       
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
