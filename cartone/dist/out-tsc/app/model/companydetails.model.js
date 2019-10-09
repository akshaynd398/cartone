var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var CompanyDetailsModel = /** @class */ (function () {
    function CompanyDetailsModel() {
        this.companyInfo = {
            name: 'Trend Shopping',
            address: 'No: 12,OMR Road',
            city: 'Chennai',
            pincode: '600045',
            email: 'customer.care@a2zshoppee.com',
            phone: '044-43232123'
        };
    }
    CompanyDetailsModel = __decorate([
        Injectable()
    ], CompanyDetailsModel);
    return CompanyDetailsModel;
}());
export { CompanyDetailsModel };
//# sourceMappingURL=companydetails.model.js.map