var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';
var ProductsListDir = /** @class */ (function () {
    function ProductsListDir(storage, cart) {
        this.storage = storage;
        this.cart = cart;
        this.__allprdts = {};
        this.__searchedProduct = '';
        this.sortByOption = '';
        this.refresh = new EventEmitter();
    }
    ProductsListDir.prototype.ngOnInit = function () {
        this.sortByOption = 'product_name';
    };
    ProductsListDir.prototype.addToCart = function (productId, productQty) {
        this.cart.allItems = this.__allprdts;
        this.cart.addToCart(productId, productQty, '');
        this.refresh.emit('true');
    };
    __decorate([
        Input("allProductList"),
        __metadata("design:type", Object)
    ], ProductsListDir.prototype, "__allprdts", void 0);
    __decorate([
        Input("searchedText"),
        __metadata("design:type", String)
    ], ProductsListDir.prototype, "__searchedProduct", void 0);
    __decorate([
        Input("sortingBy"),
        __metadata("design:type", String)
    ], ProductsListDir.prototype, "sortByOption", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ProductsListDir.prototype, "refresh", void 0);
    ProductsListDir = __decorate([
        Component({
            selector: 'productslist-dir',
            template: "\n  \n  <div class=\"row\">  \n    <div class=\"col-md-4\"  *ngFor = \"let item of __allprdts | filter : __searchedProduct | sortBy : sortByOption  \">\n        <div class=\"card\"> \n        <div>         \n          <img class=\"rounded mx-auto d-block img-responsive mt-3\" src=\"{{item.product_image}}\" alt=\"Card image cap\">\n          </div>\n          <div class=\"card-body\">\n            <h6 class=\"card-title font-weight-bold\">{{item.product_name}}</h6>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <p class=\"card-text\"> <small> {{item.product_weight}} </small></p>\n              </div>\n              <div class=\"col-md-6\">\n              <p class=\"text-right\"> <small> Rs {{item.product_price}} </small> </p>\n              </div>\n            </div>\n            <button class=\"btn btn-sm btn-primary\" (click)=\"addToCart(item.p_id,1,'')\">Add to Cart</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  ",
            styles: ["\n     input{ margin: 5px; }\n     img{\n       height:120px;\n       width:auto\n     }\n     .col-md-4{\n       margin-bottom:20px;\n     }\n  "]
        }),
        __metadata("design:paramtypes", [StorageService,
            CartService])
    ], ProductsListDir);
    return ProductsListDir;
}());
export { ProductsListDir };
//# sourceMappingURL=productslist.dir.js.map