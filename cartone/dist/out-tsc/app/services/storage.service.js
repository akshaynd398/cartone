var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var StorageService = /** @class */ (function () {
    function StorageService() {
        this.data = {};
        this.storageName = "cartinfo";
        this.loadStorage();
    }
    StorageService.prototype.loadStorage = function () {
        var temp = localStorage.getItem(this.storageName);
        if (temp === undefined || temp === null || temp === '') {
            this.data = {};
        }
        else {
            this.data = JSON.parse(temp);
        }
    };
    StorageService.prototype.set = function (obj) {
        var _this = this;
        Object.keys(obj).forEach(function (key) {
            _this.data[key] = obj[key];
        });
        this.store();
    };
    StorageService.prototype.store = function () {
        localStorage.setItem(this.storageName, JSON.stringify(this.data));
    };
    StorageService.prototype.get = function (key) {
        if (key === void 0) { key = ''; }
        if (key != '') {
            return this.data[key];
        }
        else {
            return this.data;
        }
    };
    StorageService.prototype.delete = function (key) {
        delete this.data[key];
        this.store();
    };
    StorageService.prototype.deleteAll = function () {
        this.data = {};
        this.store();
    };
    StorageService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map