import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService implements CanActivate{
    private isLoggedIn: boolean= false;
     constructor(private router: Router){
            if (localStorage.getItem('token') && localStorage.getItem('userId')) {
                this.isLoggedIn = true;
            }
     }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (localStorage.getItem('token') && localStorage.getItem('userId')) {
        // if (next.routeConfig.path === 'user/commit') {
        //     console.log('commit');
        //     return true;
        // }else{
        //    if(!localStorage.getItem('commit')){
        //     this.router.navigate(['user/commit']);
        //     return true;
        //    }
        //    return true;
        // }
        return true;
    }
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    return false;
}


logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('commit');
    this.isLoggedIn = false;
}

isLoggedLogin() {
    return this.isLoggedIn;
}

setIsloggedIn(data: boolean){
    this.isLoggedIn = data;

}

getTokenHeader(): any{
    let authToken = localStorage.getItem('token');
     let headers = new Headers({ 'Accept': 'application/json' });
     headers.append('token', `${authToken}`);

     let options = new RequestOptions({ headers: headers });
     return options;
};

}