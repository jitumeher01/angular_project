import { Component } from '@angular/core';
import {AuthService} from '../app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './navbar.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _authService: AuthService) {}
  get getLoggedIn() {
    return this._authService.isLoggedLogin();
  }
}
