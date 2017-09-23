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
var bankdetail_1 = require("../../../model/bankdetail");
var AllBankComponent = (function () {
    function AllBankComponent(_userService, _route, _authService, _loadingService) {
        this._userService = _userService;
        this._route = _route;
        this._authService = _authService;
        this._loadingService = _loadingService;
        this.bankDetails = [];
        this.editBank = new bankdetail_1.BankDetail();
        this.successMessage = '';
        this.isBankEdit = false;
        this.bank = new bankdetail_1.BankDetail();
    }
    AllBankComponent.prototype.ngOnInit = function () {
        this.refreshAllBank();
    };
    AllBankComponent.prototype.addBankDetails = function (bank) {
        var _this = this;
        this._loadingService.openModal();
        this.successMessage = '';
        document.getElementById('close').click();
        console.log(bank);
        this._userService.userAddBankDetails(bank).subscribe(function (bankDetails) {
            _this.bankDetails = bankDetails;
            console.log(bankDetails);
            _this._loadingService.closeModal();
        }, function (err) {
            console.log(err);
            _this._loadingService.closeModal();
            _this._route.navigate(['/logout']);
        });
    };
    AllBankComponent.prototype.deleteBankDetails = function (id) {
        var _this = this;
        this._loadingService.openModal();
        this.successMessage = '';
        this._userService.userdeleteBankDetail(id).subscribe(function (message) {
            _this.successMessage = 'Bank Details Delete successfully !';
            _this._loadingService.closeModal();
            _this.refreshAllBank();
        }, function (err) {
            console.log(err);
            _this._loadingService.closeModal();
            _this._route.navigate(['/logout']);
        });
    };
    AllBankComponent.prototype.defaultBankDetails = function (id) {
        var _this = this;
        this._loadingService.openModal();
        this.successMessage = '';
        this._userService.userDefaultBankDetail(id).subscribe(function (message) {
            _this.successMessage = 'Bank Details set default !';
            _this._loadingService.closeModal();
            _this.refreshAllBank();
        }, function (err) {
            console.log(err);
            _this._loadingService.closeModal();
            _this._route.navigate(['/logout']);
        });
    };
    AllBankComponent.prototype.editBankDetails = function (editBank) {
        this.isBankEdit = true;
        this.editBank = editBank;
        console.log(editBank);
    };
    AllBankComponent.prototype.updateBankDetails = function (editBank) {
        var _this = this;
        this.isBankEdit = true;
        this._loadingService.openModal();
        this._userService.userUpdateBankDetails(this.editBank).subscribe(function (res) {
            _this._loadingService.closeModal();
            _this.refreshAllBank();
            _this.isBankEdit = false;
            console.log('jitu');
        }, function (err) {
            console.log(err);
            _this._loadingService.closeModal();
            _this._route.navigate(['/logout']);
        });
    };
    AllBankComponent.prototype.refreshAllBank = function () {
        var _this = this;
        this._loadingService.openModal();
        this._userService.usergetAllBankDetails()
            .subscribe(function (bankDetails) {
            _this.bankDetails = bankDetails;
            _this._loadingService.closeModal();
            console.log(bankDetails);
        }, function (err) {
            console.log(err);
            _this._loadingService.closeModal();
            _this._route.navigate(['/logout']);
        });
    };
    AllBankComponent.prototype.dynamicApi = function (url) {
    };
    return AllBankComponent;
}());
AllBankComponent = __decorate([
    core_1.Component({
        templateUrl: './allbank.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, auth_service_1.AuthService, loading_service_1.LoadingService])
], AllBankComponent);
exports.AllBankComponent = AllBankComponent;
//# sourceMappingURL=allbank.component.js.map