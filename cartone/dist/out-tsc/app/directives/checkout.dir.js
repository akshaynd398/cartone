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
import { CartService } from '../services/cart.service';
import { StorageService } from '../services/storage.service';
import { CompanyDetailsModel } from '../model/companydetails.model';
var CheckOutDir = /** @class */ (function () {
    function CheckOutDir(cart, storage, company) {
        this.cart = cart;
        this.storage = storage;
        this.company = company;
        this.companyDetails = {};
        this.customerDetails = {};
        this.checkOutFlag = {};
        this.invoiceDate = new Date();
        this.invoiceNo = Math.floor(Math.random() * 10000);
        this.__allprdts = {};
    }
    CheckOutDir.prototype.ngOnInit = function () {
        this.customerDetails = this.cart.loadCheckoutInfo('customerInfo');
        this.companyDetails = this.company.companyInfo;
        this.cart.allItems = this.__allprdts;
        this.cart.listCartItems();
        this.checkOutFlag = JSON.parse(this.storage.get('mycart'));
    };
    CheckOutDir.prototype.clearCart = function () {
        var temp = {};
        localStorage.setItem(this.storage.storageName, JSON.stringify(temp));
        //this.checkOutFlag = Object.keys(this.storage.get()).length;
        //console.log(this.checkOutFlag)
        document.location.href = '/products';
    };
    CheckOutDir.prototype.print = function () {
        var temp = {};
        localStorage.setItem(this.storage.storageName, JSON.stringify(temp));
        window.focus();
        window.print();
    };
    __decorate([
        Input("allProductList"),
        __metadata("design:type", Object)
    ], CheckOutDir.prototype, "__allprdts", void 0);
    CheckOutDir = __decorate([
        Component({
            selector: 'checkout-dir',
            template: " \n\n \n   \n   <div *ngIf=\"customerDetails && customerDetails.firstName;else emptyCheckout \"> \n   <div class=\"alert alert-success d-print-none\" role=\"alert\">\n    Thank you so much <strong>{{customerDetails.firstName}} {{customerDetails.lastName}}</strong>.Your order has been placed successfully and will be delivered in <strong>3 days.</strong> \n    <button class=\"btn btn-sm btn-info ml-2 mr-1\" (click)=\"print()\">Print Invoice</button><button class=\"btn btn-sm btn-info ml-1\" (click)=\"clearCart()\">Place a New Order</button>\n    \n   </div>\n   \n    <div class=\"card\">\n        <div class=\"card-header\">\n            Invoice Date:\n            <strong>{{invoiceDate | date:'d-MMM-yyyy'}}</strong>\n            <span class=\"float-right\"> <strong>Status:</strong> Pending</span>\n\n        </div>\n        <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6 text-left\">\n          <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSGhNugPi-wkkvEePwHNppt8AaZRlUk-y9yEapagLNUaXxy_G\" class=\"logo mr-2 mb-4 float-left\"/>\n          </div>\n          <div class=\"col-md-6 text-right\">\n          <h4># INV-{{invoiceNo}}</h4>\n          </div>\n        </div>\n            <div class=\"row mb-4\">\n                <div class=\"col-sm-6\">\n                    <h6 class=\"mb-3\">From:</h6>\n                    <div>\n                        <strong>{{companyDetails.name}}</strong>\n                    </div>\n                    <div>{{companyDetails.address}}</div>\n                    <div>{{companyDetails.city}},{{companyDetails.pincode}}</div>\n                    <div>Email: {{companyDetails.email}}</div>\n                    <div>Phone: {{companyDetails.phone}}</div>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <h6 class=\"mb-3\">To:</h6>\n                    <div>\n                        <strong>{{customerDetails.firstName}} {{customerDetails.lastName}}</strong>\n                    </div>\n                    <div>{{customerDetails.addressOne}}, {{customerDetails.addressTwo}}</div>\n                    <div>{{customerDetails.city}},{{customerDetails.state}},{{customerDetails.zip}}</div>\n                    <div>Email: {{customerDetails.email}}</div>\n                    <div>Phone: {{customerDetails.mobile}}</div>\n                </div>\n            </div>\n\n            <div class=\"table-responsive-sm\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th class=\"center\">#</th>\n                            <th>Item</th>\n                            <th class=\"right\">Unit Cost</th>\n                            <th class=\"center\">Qty</th>\n                            <th class=\"right\">Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor = \"let cartItems of cart.cartItemsList;let i=index;\">\n                            <td class=\"center\">{{i+1}}</td>\n                            <td class=\"left strong\">{{cartItems.name}}</td>\n                            <td class=\"right\">{{(cartItems.price/cartItems.qty)}}</td>\n                            <td class=\"center\">{{cartItems.qty}}</td>\n                            <td class=\"right\">{{cartItems.price}}</td>\n                        </tr>\n                        \n                    </tbody>\n                </table>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-5\">\n\n                </div>\n\n                <div class=\"col-lg-4 col-sm-5 ml-auto\">\n                    <table class=\"table table-clear\">\n                        <tbody>\n                            <tr>\n                                <td class=\"left\">\n                                    <strong>Subtotal</strong>\n                                </td>\n                                <td class=\"right\">INR {{cart.cartTotal}}</td>\n                            </tr>\n                            \n                            <tr>\n                                <td class=\"left\">\n                                    <strong>Total</strong>\n                                </td>\n                                <td class=\"right\">\n                                    <strong>INR {{cart.cartTotal}}</strong>\n                                </td>\n                            </tr>\n                            \n                        </tbody>\n                    </table>\n                  \n                </div>\n\n            </div>\n\n        </div>\n    </div>\n</div>\n<ng-template #emptyCheckout> \n<div class=\"card alert alert-primary\">\n  <div class=\"card-body\">\n    Please shop some products & Provide billing information .<a class=\"btn btn-sm btn-info float-right ml-2\" routerLink = '/products'> Continue Shopping</a> &nbsp;  &nbsp; <a class=\"btn btn-sm btn-info float-right\" routerLink = '/billing' *ngIf=\"cart.cartItemsList && cart.cartTotal\"> Go to Billing</a>\n  </div>\n</div>\n\n   \n   </ng-template>\n  ",
            styles: ["\n  .card-header {\n    padding: .75rem 1.25rem;\n    margin-bottom: 0;\n    background-color: #cce5ff;\n    border-bottom: 1px solid rgba(0,0,0,.125);\n}\n.logo{\n      height: 100px;\n      width: auto;\n    }\n\n  "]
        }),
        __metadata("design:paramtypes", [CartService,
            StorageService,
            CompanyDetailsModel])
    ], CheckOutDir);
    return CheckOutDir;
}());
export { CheckOutDir };
//# sourceMappingURL=checkout.dir.js.map