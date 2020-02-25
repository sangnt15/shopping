import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from 'src/access.guard';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        canDeactivate:[AccessGuard]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
