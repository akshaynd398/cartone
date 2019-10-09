var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (products, searchText) {
        if (products === void 0) { products = {}; }
        if (searchText === void 0) { searchText = ''; }
        if (!products) {
            return {};
        }
        if (searchText == '') {
            return products;
        }
        return products.filter(function (items) {
            return items.product_name.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Pipe({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map