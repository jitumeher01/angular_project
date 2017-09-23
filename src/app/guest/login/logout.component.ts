import { Component } from '@angular/core';
import {AuthService} from '../../auth.service';

import {Router} from '@angular/router';

@Component({
    template: '',
})
export class LogoutComponent {

  constructor(private _authService: AuthService, private _route: Router) {
       this._authService.logout();
       this._route.navigate(['/login']);

  }
}
