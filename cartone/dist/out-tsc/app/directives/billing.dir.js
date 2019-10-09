var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';
//import { emailValidation } from '../validations/custom.validate';
var BillingDir = /** @class */ (function () {
    function BillingDir(fb, storage, cart) {
        this.fb = fb;
        this.storage = storage;
        this.cart = cart;
        this.billingForm = {};
        this.errorsInfo = {};
        this.__billing = {};
    }
    BillingDir.prototype.ngOnInit = function () {
        this.loadForm();
    };
    BillingDir.prototype.loadForm = function () {
        var temp = {};
        var billingInfo = this.cart.loadCheckoutInfo('customerInfo');
        if (billingInfo === undefined || billingInfo === '' || billingInfo === null) {
            billingInfo = {};
        }
        (this.__billing).forEach(function (item) {
            temp[item.uid] = [billingInfo[item.uid], item.validation];
        });
        this.billingForm = this.fb.group(temp);
    };
    BillingDir.prototype.send = function () {
        if (this.billingForm.valid) {
            this.storage.set({
                customerInfo: this.billingForm.value
            });
            document.location.href = "/checkout";
        }
    };
    __decorate([
        Input('billingFields'),
        __metadata("design:type", Object)
    ], BillingDir.prototype, "__billing", void 0);
    BillingDir = __decorate([
        Component({
            selector: 'billing-dir',
            template: "\n      <form [formGroup]=\"billingForm\" (ngSubmit) = \"send()\">\n      \n      <div class=\"form-row\">\n\n          <div class=\"form-group col-md-6\" *ngFor=\"let formFields of __billing\">\n             \n            <label for=\"inputEmail4\">{{formFields.label}}</label>\n            <div *ngIf=\"formFields.type=='text'\">\n            <input \n            type=\"text\" \n            class=\"form-control\" \n            formControlName=\"{{formFields.uid}}\"\n            placeholder=\"{{formFields.placeholder}}\" />\n\n            <small \n            class=\"form-text text-danger\" \n            *ngIf=\"billingForm.controls[formFields.uid].status=='INVALID' && billingForm.controls[formFields.uid].touched\"\n            >{{formFields.errorMsg}}</small></div>\n\n            <div *ngIf=\"formFields.type=='select'\">\n              <select id=\"inputState\" class=\"form-control\" formControlName = \"{{formFields.uid}}\">\n                <option>Select</option>\n                <option *ngFor=\"let optionName of formFields.options\" value=\"{{optionName}}\">{{optionName}}</option>\n              </select>\n              <small class=\"form-text text-danger\" \n            *ngIf=\"billingForm.controls[formFields.uid].status=='INVALID' && billingForm.controls[formFields.uid].touched\"\n            >{{formFields.errorMsg}}</small>\n            </div>\n          </div>\n                 \n      </div>\n    <button type=\"submit\" class=\"btn btn-sm btn-primary\" [disabled]=\"billingForm.invalid\" *ngIf=\"cart.cartItemsList && cart.cartTotal\">Confirm and Place Order</button>\n    <a routerLink=\"/products\" class=\"btn btn-sm btn-info float-right\">Continue Shopping</a>\n  \n</form>\n  ",
            styles: ["\n  form .ng-invalid.ng-touched{\n    border-color: #dc3545;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            StorageService,
            CartService])
    ], BillingDir);
    return BillingDir;
}());
export { BillingDir };
//# sourceMappingURL=billing.dir.js.map