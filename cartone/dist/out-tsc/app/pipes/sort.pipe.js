var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (products, fieldName) {
        var sortFieldSelected = fieldName;
        var sortField = sortFieldSelected.split('|');
        products.sort(function (a, b) {
            if (sortField[1] == 'asc' || sortField[1] == 'lth') {
                if (a[sortField[0]] < b[sortField[0]]) {
                    return -1;
                }
                else if (a[sortField[0]] > b[sortField[0]]) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else if (sortField[1] == 'desc' || sortField[1] == 'htl') {
                if (a[sortField[0]] > b[sortField[0]]) {
                    return -1;
                }
                else if (a[sortField[0]] < b[sortField[0]]) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                if (a[sortField[0]] < b[sortField[0]]) {
                    return -1;
                }
                else if (a[sortField[0]] > b[sortField[0]]) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
        /*if(sortField[1] == 'htl'){
          let temp = [];
          for(let i = (products.length -1); i>=0 ; i--){
            temp.push(products[i]);
          }
          products=temp;
        }*/
        return products;
    };
    SortPipe = __decorate([
        Pipe({
            name: 'sortBy'
        })
    ], SortPipe);
    return SortPipe;
}());
export { SortPipe };
//# sourceMappingURL=sort.pipe.js.map