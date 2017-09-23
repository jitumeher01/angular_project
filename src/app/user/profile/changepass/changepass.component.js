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
var user_service_1 = require("../../../service/user.service");
var loading_service_1 = require("../../../service/loading.service");
var auth_service_1 = require("../../../auth.service");
var router_1 = require("@angular/router");
var user_1 = require("../../../model/user");
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(_userService, _route, _authService, _loadingService) {
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._loadingService = _loadingService;
        this.user = new user_1.User();
        this.isSubmit = false;
        this.errorMessage = '';
        this.successMessage = '';
    }
    ChangePasswordComponent.prototype.updatePassword = function (user) {
        var _this = this;
        console.log(user);
        this.isSubmit = true;
        this._loadingService.openModal();
        this._userService.userUpdatePassword(user)
            .subscribe(function (user) {
            _this.isSubmit = false;
            _this.successMessage = 'Password Update Successfully !';
            _this._loadingService.closeModal();
        }, function (err) {
            _this.isSubmit = false;
            _this.errorMessage = err;
            _this._loadingService.closeModal();
        });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    core_1.Component({
        templateUrl: './changepass.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, auth_service_1.AuthService, loading_service_1.LoadingService])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=changepass.component.js.map