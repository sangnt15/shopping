import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { AccessGuard } from 'src/access.guard';
import { ProductChildComponent } from './product-list/product-child/product-child.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductChildComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    MatNativeDateModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
providers:[
  AccessGuard
]
})
export class ProductModule { }
