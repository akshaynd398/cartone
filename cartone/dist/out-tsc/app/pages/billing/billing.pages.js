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
import { BillingFormModel } from '../../model/billingformfields.model';
var BillingPage = /** @class */ (function () {
    function BillingPage(billing) {
        this.billing = billing;
        this.cartflag = false;
    }
    BillingPage.prototype.ngOnInit = function () {
        this.ref();
    };
    BillingPage.prototype.ref = function () {
        var _this = this;
        this.cartflag = false;
        setTimeout(function () {
            _this.cartflag = true;
        }, 10);
    };
    BillingPage = __decorate([
        Component({
            template: "\n  <menu></menu>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 order-md-1\">\n        <div class=\"card\">\n          <h5 class=\"card-header bg-info bg-light\">Billing Information</h5>\n          <div class=\"card-body\">\n                <billing-dir \n              [billingFields]=\"billing.data\"\n              ></billing-dir>\n          </div>\n        </div>      \n      </div>\n      <div class=\"col-md-4 order-md-2 mb-4\">\n      <billing-cart\n       *ngIf=\"cartflag\"\n      ></billing-cart>              \n      </div>  \n\n    </div>\n  \n  </div>\n  ",
            styles: ["\n  .card-header{\n    background-color: #579eaf38!important;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [BillingFormModel])
    ], BillingPage);
    return BillingPage;
}());
export { BillingPage };
//# sourceMappingURL=billing.pages.js.map