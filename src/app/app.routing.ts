import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthService} from './auth.service';

import { HomeComponent } from '../app/guest/home/home.component';
import { AboutUsomponent } from '../app/guest/aboutus/aboutus.component';
import { LoginComponent } from '../app/guest/login/login.component';
import { RegisterComponent } from '../app/guest/register/register.component';
import { LogoutComponent } from '../app/guest/login/logout.component';


import { DashboardComponent } from '../app/user/dashboard/dashboard.component';
import { ProfileComponent } from '../app/user/profile/profile.component';
import { EditProfileComponent } from '../app/user/profile/editprofile/editprofile.component';
import { ChangePasswordComponent } from '../app/user/profile/changepass/changepass.component';
import { AllBankComponent } from '../app/user/profile/bankdetail/allbank.component';
import { CommitComponent } from '../app/user/commit/commit.component';
import { FriendComponent } from '../app/user/friend/friend.component';
import { Growthomponent } from '../app/user/growth/growth.component';





export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutUsomponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'user/dashboard', component: DashboardComponent, canActivate: [AuthService]},
    {path: 'user/profile', component: ProfileComponent, canActivate: [AuthService]},
     {path: 'user/editProfile', component: EditProfileComponent, canActivate: [AuthService]},
     {path: 'user/changePassword', component: ChangePasswordComponent, canActivate: [AuthService]},
     {path: 'user/viewBankDetails', component: AllBankComponent, canActivate: [AuthService]},
     {path: 'user/commit', component: CommitComponent, canActivate: [AuthService]},
    {path: 'user/friends', component: FriendComponent, canActivate: [AuthService]},
    {path: 'user/growth', component: Growthomponent, canActivate: [AuthService]},
    {path: '', redirectTo: '/home', pathMatch : 'full'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
