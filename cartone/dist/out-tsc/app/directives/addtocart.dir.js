var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
var AddToCartDir = /** @class */ (function () {
    function AddToCartDir(cart) {
        this.cart = cart;
    }
    AddToCartDir.prototype.changeQty = function (pid, qty, replace) {
        if (qty !== '') {
            qty = parseInt(qty) || 1;
            this.cart.addToCart(pid, qty, replace);
        }
        else {
            this.cart.addToCart(pid, 1, replace);
        }
    };
    AddToCartDir.prototype.emptyCart = function () {
        var cartStatus = confirm("Are you sure you want to clear the cart ?");
        if (cartStatus) {
            this.cart.emptyCart();
            document.location.href = '/products';
        }
    };
    AddToCartDir = __decorate([
        Component({
            selector: 'cart',
            template: "\n  <div class=\"card text-center\">\n  <div class=\"card-header\">\n    Your Cart Items\n    <button type=\"button\" class=\"btn btn-sm btn-warning float-right\">\n        Total items <span class=\"badge badge-light\">{{cart.cartItemsList.length}}</span>        \n    </button>\n    <button type=\"button\" class=\"btn btn-sm btn-danger mr-2 float-right\" (click)=\"emptyCart()\" *ngIf=\"cart.cartItemsList && cart.cartTotal\">\n       Empty Cart       \n    </button>\n  </div>\n  <div class=\"card-body\">  \n    <table class=\"table\">\n      <thead>\n        <tr>      \n          <th scope=\"col\">Product</th>\n          <th scope=\"col\">Price</th>\n          <th scope=\"col\">Qty</th>\n          <th scope=\"col\">Total</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n        \n        </tr>\n        <tr *ngFor=\"let itm of cart.cartItemsList \">      \n          <td class=\"text-left\">{{itm.name}}</td>\n          <td>{{itm.price/itm.qty}} x</td>\n          <td class=\"w30\">\n            <div class=\"input-group input-group-sm mb-3\">\n              <div class=\"input-group-prepend\">\n                <button class=\"btn btn-info\" type=\"button\" (click)=\"changeQty(itm.pid,1,'')\">+</button>\n              </div>\n              <input type=\"text\" class=\"form-control text-center\" value=\"{{itm.qty}}\" #qtyRef (keyup)=\"changeQty(itm.pid,qtyRef.value,'replace')\" >\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-danger\" type=\"button\" (click)=\"changeQty(itm.pid,-1,'')\">-</button>\n              </div>\n            </div>\n          </td>\n          <td>{{itm.price}}</td>\n        </tr>\n        </tbody>\n    </table>\n    <a routerLink = \"/billing\" class=\"btn btn-sm btn-primary\" *ngIf=\"cart.cartItemsList && cart.cartTotal\">Checkout</a>\n  </div>\n  <div class=\"card-footer text-muted font-weight-bold\">\n    Total : Rs. {{cart.cartTotal}}\n  </div>  \n</div>\n  ",
            styles: ["\n  .table td {\n    vertical-align : unset;\n    font-size:14px;\n  }\n  .w30{\n    width: 35%;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [CartService])
    ], AddToCartDir);
    return AddToCartDir;
}());
export { AddToCartDir };
//# sourceMappingURL=addtocart.dir.js.map