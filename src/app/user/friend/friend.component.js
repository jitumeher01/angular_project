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
var friend_service_1 = require("../../service/friend.service");
var router_1 = require("@angular/router");
var user_1 = require("../../model/user");
var commit_1 = require("../../model/commit");
var FriendComponent = (function () {
    function FriendComponent(_friendService, _router) {
        this._friendService = _friendService;
        this._router = _router;
        this.user = new user_1.User();
        this.commit = new commit_1.Commit();
    }
    FriendComponent.prototype.ngOnInit = function () {
        this.userGetAllFriends();
    };
    FriendComponent.prototype.userGetAllFriends = function () {
        var _this = this;
        this._friendService.usergetAllFriend().subscribe(function (user) {
            _this.user = user;
            console.log(user);
        }, function (err) {
            console.log(err);
        });
    };
    return FriendComponent;
}());
FriendComponent = __decorate([
    core_1.Component({
        templateUrl: './friend.component.html',
    }),
    __metadata("design:paramtypes", [friend_service_1.FriendService, router_1.Router])
], FriendComponent);
exports.FriendComponent = FriendComponent;
//# sourceMappingURL=friend.component.js.map