import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';




import {routing} from '../app/app.routing';


/**
 * All Services goes here
 */
import {UserService} from '../app/service/user.service';
import {UrlService} from '../app/service/url.service';
import {LoadingService} from '../app/service/loading.service';
import {CommitService} from '../app/service/commit.service';
import {FriendService} from '../app/service/friend.service';

import {AuthService} from './auth.service';
import { HttpModule } from '@angular/http';




import { HomeComponent } from '../app/guest/home/home.component';
import { AboutUsomponent } from '../app/guest/aboutus/aboutus.component';
import { LoginComponent } from '../app/guest/login/login.component';
import { RegisterComponent } from '../app/guest/register/register.component';
import { LogoutComponent } from '../app/guest/login/logout.component';

import { DashboardComponent } from '../app/user/dashboard/dashboard.component';
import { ProfileComponent } from '../app/user/profile/profile.component';
import { EditProfileComponent } from '../app/user/profile/editprofile/editprofile.component';
import { ChangePasswordComponent } from '../app/user/profile/changepass/changepass.component';
import { ProfileNavBarComponent } from '../app/user/profile/profilenavbar.component';
import { AllBankComponent } from '../app/user/profile/bankdetail/allbank.component';

import { CommitComponent } from '../app/user/commit/commit.component';
import { FriendComponent } from '../app/user/friend/friend.component';
import { Growthomponent } from '../app/user/growth/growth.component';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing],
  declarations: [
  AppComponent,
  HomeComponent,
  AboutUsomponent,
  LoginComponent,
  RegisterComponent,
  DashboardComponent,
  LogoutComponent,
  ProfileComponent,
  EditProfileComponent,
  ChangePasswordComponent,
  ProfileNavBarComponent,
  AllBankComponent,
  CommitComponent,
  FriendComponent,
  Growthomponent
   ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, UserService, UrlService, CommitService, FriendService, LoadingService]
})
export class AppModule { }
