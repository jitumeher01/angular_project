"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var user_1 = require("../model/user");
require("rxjs/add/observable/throw");
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseURL = 'http://ec2-54-149-236-193.us-west-2.compute.amazonaws.com:8080/royallife/api/rest/';
        //private baseURL: string= 'http://localhost:8080/royallife/api/rest/';
        this.userLoginUrl = this.baseURL + 'user/login';
        this.userRegisterUrl = this.baseURL + 'user/register';
        this.userProfileUrl = this.baseURL + 'user/profile';
        this.userUpdateProfileUrl = this.baseURL + 'user/updateProfile';
        this.userUpdatePasswordUrl = this.baseURL + 'user/updatePassword';
        this.userGetAllBankDetailsUrl = this.baseURL + 'user/bank/all';
        this.userAddBankDetailsUrl = this.baseURL + 'user/addBank';
        this.userdeleteBankDetailsUrl = this.baseURL + 'user/deleteBank/';
        this.userdefaultBankDetailsUrl = this.baseURL + 'user/setDefaultBank/';
        this.userUpdateBankDetailsUrl = this.baseURL + 'user/updateBank';
        this.user = new user_1.User();
        this.bankDetails = [];
    }
    UserService.prototype.userLogin = function (credentials) {
        return this._http.post(this.userLoginUrl, credentials)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.userRegister = function (user) {
        return this._http.post(this.userRegisterUrl, user)
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.userProfile = function () {
        return this._http.get(this.userProfileUrl, this.getTokenHeader())
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.userUpdateProfile = function (user) {
        return this._http.post(this.userUpdateProfileUrl, user, this.getTokenHeader())
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.userUpdatePassword = function (user) {
        return this._http.post(this.userUpdatePasswordUrl, user, this.getTokenHeader())
            .map(function (res) { return res; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.usergetAllBankDetails = function () {
        return this._http.get(this.userGetAllBankDetailsUrl, this.getTokenHeader())
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.userAddBankDetails = function (bank) {
        return this._http.post(this.userAddBankDetailsUrl, bank, this.getTokenHeader())
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.userdeleteBankDetail = function (id) {
        return this._http.get(this.userdeleteBankDetailsUrl + id, this.getTokenHeader())
            .map(function (res) { return res; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.userDefaultBankDetail = function (id) {
        return this._http.get(this.userdefaultBankDetailsUrl + id, this.getTokenHeader())
            .map(function (res) { return res; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.userUpdateBankDetails = function (bank) {
        return this._http.post(this.userUpdateBankDetailsUrl, bank, this.getTokenHeader())
            .map(function (res) { return res; })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    UserService.prototype.getTokenHeader = function () {
        var authToken = localStorage.getItem('token');
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        headers.append('token', "" + authToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    ;
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map