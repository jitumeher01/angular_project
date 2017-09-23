"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UrlService = (function () {
    function UrlService() {
        this.baseURL = 'http://ec2-54-149-236-193.us-west-2.compute.amazonaws.com:8080/royallife/api/rest/';
        //private baseURL: string= 'http://localhost:8080/royallife/api/rest/';
        this.userCommitURL = this.baseURL + 'user/commit';
        this.userAddCommitUrl = this.baseURL + 'user/addCommit';
        this.userFriendsUrl = this.baseURL + 'user/friend/all';
    }
    return UrlService;
}());
UrlService = __decorate([
    core_1.Injectable()
], UrlService);
exports.UrlService = UrlService;
//# sourceMappingURL=url.service.js.map