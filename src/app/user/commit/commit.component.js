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
var commit_service_1 = require("../../service/commit.service");
var loading_service_1 = require("../../service/loading.service");
var router_1 = require("@angular/router");
var user_1 = require("../../model/user");
var commit_1 = require("../../model/commit");
var CommitComponent = (function () {
    function CommitComponent(_commitService, _route, _loadingService) {
        this._commitService = _commitService;
        this._route = _route;
        this._loadingService = _loadingService;
        this.user = new user_1.User();
        this.commit = new commit_1.Commit();
        this.cPlan = [
            { id: '15DAYS', name: '15 Days Plan' },
            { id: '30DAYS', name: '30 Days Plan' }
        ];
        this.cAmount = [
            { 'amount': '1000' },
            { 'amount': '2000' },
            { 'amount': 3000 },
            { 'amount': 4000 },
            { 'amount': 5000 },
            { 'amount': 6000 },
            { 'amount': 7000 },
            { 'amount': 8000 },
            { 'amount': 9000 },
            { 'amount': 10000 }
        ];
    }
    CommitComponent.prototype.ngOnInit = function () {
        this.userGetCommit();
    };
    CommitComponent.prototype.userGetCommit = function () {
        var _this = this;
        this._loadingService.openModal();
        this._commitService.userCommit().subscribe(function (user) {
            _this.user = user;
            console.log(user.commitData);
            _this._loadingService.closeModal();
            if (user.commitData) {
                console.log('jitu');
            }
        }, function (err) {
            console.log(err);
            _this._loadingService.closeModal();
            _this._route.navigate(['/logout']);
        });
    };
    CommitComponent.prototype.userAddCommit = function () {
        var _this = this;
        console.log(this.commit);
        this._loadingService.openModal();
        this._commitService.userAddCommit(this.commit).subscribe(function (user) {
            _this.user = user;
            console.log(user);
            _this._loadingService.closeModal();
        }, function (err) {
            console.log(err);
            _this._loadingService.closeModal();
            _this._route.navigate(['/logout']);
        });
    };
    return CommitComponent;
}());
CommitComponent = __decorate([
    core_1.Component({
        templateUrl: './commit.component.html',
    }),
    __metadata("design:paramtypes", [commit_service_1.CommitService, router_1.Router, loading_service_1.LoadingService])
], CommitComponent);
exports.CommitComponent = CommitComponent;
//# sourceMappingURL=commit.component.js.map