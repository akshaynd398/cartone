var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { emailValidation, len, numeric } from '../validations/custom.validate';
var BillingFormModel = /** @class */ (function () {
    function BillingFormModel() {
        this.data = [
            {
                label: 'First Name',
                placeholder: 'First Name',
                uid: 'firstName',
                type: 'text',
                value: '',
                validation: [Validators.required],
                errorMsg: 'Please enter first name'
            },
            {
                label: 'Last Name',
                placeholder: 'Last Name',
                uid: 'lastName',
                type: 'text',
                value: '',
                validation: [Validators.required],
                errorMsg: 'Please enter last name'
            },
            {
                label: 'Email',
                placeholder: 'Email',
                uid: 'email',
                type: 'text',
                value: '',
                validation: [Validators.required, emailValidation()],
                errorMsg: 'Please enter email'
            },
            {
                label: 'Mobile',
                placeholder: 'Mobile',
                uid: 'mobile',
                type: 'text',
                value: '',
                validation: [Validators.required, len(10), numeric()],
                errorMsg: 'Please enter mobile no'
            },
            {
                label: 'Address 1',
                placeholder: 'Address 1',
                uid: 'addressOne',
                type: 'text',
                value: '',
                validation: [Validators.required],
                errorMsg: 'Please enter address one'
            },
            {
                label: 'Address 2',
                placeholder: 'Address 2',
                uid: 'addressTwo',
                type: 'text',
                value: '',
                validation: [Validators.required],
                errorMsg: 'Please enter address two'
            },
            {
                label: 'City',
                placeholder: 'City',
                uid: 'city',
                type: 'text',
                value: '',
                validation: [Validators.required],
                errorMsg: 'Please enter city'
            },
            {
                label: 'State',
                placeholder: 'State',
                uid: 'state',
                type: 'select',
                value: '',
                validation: [Validators.required],
                options: ['Tamil Nadu', 'Andhra Pradesh', 'Karnataka'],
                errorMsg: 'Please enter state'
            },
            {
                label: 'Zip Code',
                placeholder: 'Zip Code',
                uid: 'zip',
                type: 'text',
                value: '',
                validation: [Validators.required],
                errorMsg: 'Please enter zipcode'
            },
            {
                label: 'Payment Mode',
                placeholder: 'Payment Mode',
                uid: 'paymentmode',
                type: 'select',
                value: '',
                validation: [Validators.required],
                options: ['COD', 'UPI'],
                errorMsg: 'Please enter payment mode'
            },
        ];
    }
    BillingFormModel = __decorate([
        Injectable()
    ], BillingFormModel);
    return BillingFormModel;
}());
export { BillingFormModel };
//# sourceMappingURL=billingformfields.model.js.map