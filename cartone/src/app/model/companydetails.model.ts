import { Injectable } from '@angular/core';

@Injectable()
export class CompanyDetailsModel{
  
  public companyInfo : any = 
    {
      name : 'Shopping',
      address : 'vanaz company,kothrud',
      city: 'Pune',
      pincode: '411038',
      email: 'potsutra@gmail.com',
      phone : '9552879195'
    }
    
  
} 