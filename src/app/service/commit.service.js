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
var commit_1 = require("../model/commit");
var url_service_1 = require("./url.service");
var auth_service_1 = require("../../app/auth.service");
require("rxjs/add/observable/throw");
var CommitService = (function () {
    function CommitService(_urlService, _http, _authService) {
        this._urlService = _urlService;
        this._http = _http;
        this._authService = _authService;
        this.commit = new commit_1.Commit();
        this.user = new user_1.User();
    }
    CommitService.prototype.userCommit = function () {
        console.log(this._authService.getTokenHeader());
        return this._http.get(this._urlService.userCommitURL, this._authService.getTokenHeader())
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    CommitService.prototype.userAddCommit = function (commit) {
        return this._http.post(this._urlService.userAddCommitUrl, commit, this._authService.getTokenHeader())
            .map(function (res) { return res.json(); })
            .catch(function (err) {
            return Observable_1.Observable.throw(err._body || 'Server Error ...');
        });
    };
    return CommitService;
}());
CommitService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [url_service_1.UrlService, http_1.Http, auth_service_1.AuthService])
], CommitService);
exports.CommitService = CommitService;
//# sourceMappingURL=commit.service.js.map