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
import { CartService } from '../../services/cart.service';
import { ProductsModel } from '../../model/products.model';
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(cart, products) {
        this.cart = cart;
        this.products = products;
        this.cartflag = false;
    }
    CheckoutPage.prototype.ngOnInit = function () {
        this.ref();
    };
    CheckoutPage.prototype.ref = function () {
        var _this = this;
        this.cartflag = false;
        setTimeout(function () {
            _this.cartflag = true;
        }, 1000);
    };
    CheckoutPage = __decorate([
        Component({
            template: "\n   <menu></menu>\n  <div class=\"container\">\n   \n     <checkout-dir\n     [allProductList]=\"products.data\"\n     ></checkout-dir>\n  </div>\n"
        }),
        __metadata("design:paramtypes", [CartService,
            ProductsModel])
    ], CheckoutPage);
    return CheckoutPage;
}());
export { CheckoutPage };
//# sourceMappingURL=checkout.pages.js.map