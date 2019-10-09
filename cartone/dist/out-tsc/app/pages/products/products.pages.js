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
import { ProductsModel } from '../../model/products.model';
var ProductsPage = /** @class */ (function () {
    function ProductsPage(products) {
        this.products = products;
        this.cartflag = false;
        this.sortBy = '';
        this.sortOption = 'product_name|asc';
    }
    ProductsPage.prototype.ngOnInit = function () {
        this.ref();
    };
    ProductsPage.prototype.ref = function () {
        var _this = this;
        this.cartflag = false;
        setTimeout(function () {
            _this.cartflag = true;
        }, 10);
    };
    ProductsPage = __decorate([
        Component({
            template: "\n <menu></menu>\n  <div class=\"container\">\n    \n    <div class=\"form-row align-items-center\">    \n      <div class=\"col-md-9\">     \n        <div class=\"input-group mb-4 mt-2\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">Search Products</div>\n          </div>\n          <input [(ngModel)] = \"searchText\" class=\"form-control\" placeholder=\"Please enter any product name to search \">\n        </div>\n      </div>\n      <div class=\"col-md-3\">     \n        <div class=\" mb-4 mt-2\"> \n          <select class=\"form-control\"  [(ngModel)] = \"sortOption\">        \n        <option value=\"product_name|asc\">Sort By Name (A to Z)</option>\n        <option value=\"product_name|desc\">Sort By Name (Z to A)</option>\n        <option value=\"product_price|lth\">Sort By Price (Low to High)</option>\n        <option value=\"product_price|htl\">Sort By Price (High to Low)</option>\n      </select>\n        </div>\n      </div>\n      \n          \n  </div>\n    <div class=\"row\">\n      <div class=\"col-md-7\">  \n        <productslist-dir \n         (refresh)=\"ref($event)\"\n         [allProductList]=\"products.data\"\n         [searchedText]=\"searchText\"\n         [sortingBy]=\"sortOption\"\n         ></productslist-dir>\n      </div>\n      <div class=\"col-md-5\">\n        <cart \n        *ngIf=\"cartflag\"        \n        ></cart>\n      </div>\n    </div>\n    \n  \n  </div>\n  "
        }),
        __metadata("design:paramtypes", [ProductsModel])
    ], ProductsPage);
    return ProductsPage;
}());
export { ProductsPage };
//# sourceMappingURL=products.pages.js.map