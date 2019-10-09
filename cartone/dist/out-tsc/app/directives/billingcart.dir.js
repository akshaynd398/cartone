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
var BillingCartDir = /** @class */ (function () {
    function BillingCartDir(cart) {
        this.cart = cart;
    }
    BillingCartDir = __decorate([
        Component({
            selector: 'billing-cart',
            template: "\n  <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n            <span class=\"text-muted\">Your cart</span>\n            <span class=\"badge badge-warning badge-pill\">{{cart.cartItemsList.length}}</span>\n          </h4>\n          <ul class=\"list-group mb-3\">\n            <li \n            class=\"list-group-item d-flex justify-content-between lh-condensed\"\n             *ngFor=\"let itm of cart.cartItemsList \"\n            >\n              <div>\n                <h6 class=\"\">{{itm.name}} -   <span class=\"badge badge-pill badge-info text-right\">{{itm.qty}}  Nos</span> x <span class=\"badge badge-pill badge-default text-right\">{{itm.price/itm.qty}}  </span></h6>                \n              </div>\n              <span class=\"text-muted\">{{itm.price}}</span>\n            </li>\n            \n            \n            <li class=\"list-group-item d-flex justify-content-between bg-light\">\n              <span>Total (INR)</span>\n              <strong>{{cart.cartTotal}}</strong>\n            </li>\n          </ul>\n\n         \n  ",
            styles: ["\n  .table td {\n    vertical-align : unset;\n  }\n  .w30{\n    width: 35%;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [CartService])
    ], BillingCartDir);
    return BillingCartDir;
}());
export { BillingCartDir };
//# sourceMappingURL=billingcart.dir.js.map