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
import { StorageService } from './storage.service';
var CartService = /** @class */ (function () {
    function CartService(storage) {
        this.storage = storage;
        this.allItems = {};
        this.cartData = [];
        this.cartItemsList = {};
        this.cartTotal = 0;
        this.cartItemsStorageName = 'mycart';
        this.loadCart();
    }
    CartService.prototype.loadCart = function () {
        var temp = this.storage.get('mycart');
        if (temp === undefined || temp === '' || temp === null) {
            this.cartData = {};
        }
        else {
            this.cartData = temp;
        }
    };
    CartService.prototype.addToCart = function (pid, qty, replace) {
        if (this.cartData[pid] == undefined) {
            this.cartData[pid] = 0;
        }
        if (replace === '') {
            this.cartData[pid] = this.cartData[pid] + qty;
        }
        else {
            this.cartData[pid] = parseInt(qty);
        }
        if (this.cartData[pid] == 0) {
            delete this.cartData[pid];
        }
        this.storeItems();
    };
    CartService.prototype.storeItems = function () {
        this.storage.set({
            'mycart': this.cartData
        });
        this.listCartItems();
    };
    CartService.prototype.listCartItems = function () {
        var tempCart = [];
        var getActualItems = Object.keys(this.cartData);
        var cartDataItems = this.cartData;
        var tempTotal = 0;
        var onlyChoosenItems = (this.allItems).filter(function (item) {
            if (getActualItems.indexOf(item.p_id) !== -1) {
                tempCart.push({
                    pid: item.p_id,
                    name: item.product_name,
                    qty: cartDataItems[item.p_id],
                    price: item.product_price * cartDataItems[item.p_id],
                });
                tempTotal += item.product_price * cartDataItems[item.p_id];
            }
        });
        this.cartItemsList = tempCart;
        this.cartTotal = tempTotal;
    };
    CartService.prototype.loadCheckoutInfo = function (storageKey) {
        return this.storage.get(storageKey);
    };
    CartService.prototype.emptyCart = function () {
        this.storage.set({
            mycart: {}
        });
    };
    CartService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [StorageService])
    ], CartService);
    return CartService;
}());
export { CartService };
//# sourceMappingURL=cart.service.js.map