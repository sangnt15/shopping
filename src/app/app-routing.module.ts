import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductModule} from './product/product.module';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  {
    path: 'customer',
    loadChildren: () => ProductModule
  },
  {
    path: 'employee',
    component: EmployeeComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
