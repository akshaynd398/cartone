import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Pipe, PipeTransform } from '@angular/core';

import { dirConfig } from './dir.config';

import { RouterConfig,RouterDeclarations } from './router.config';

import { ProductsModel } from './model/products.model';
import { BillingFormModel } from './model/billingformfields.model';
import { CompanyDetailsModel } from './model/companydetails.model';


import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { StorageService } from './services/storage.service';
import { CartService } from './services/cart.service';
import {APP_BASE_HREF} from '@angular/common';
import { FooterComponent } from './footer/footer.component'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,RouterConfig ],
  declarations: [ AppComponent, HelloComponent, dirConfig ,RouterDeclarations,FilterPipe,SortPipe, FooterComponent ],
  providers : [ProductsModel,BillingFormModel,CompanyDetailsModel, StorageService,CartService,{provide: APP_BASE_HREF, useV