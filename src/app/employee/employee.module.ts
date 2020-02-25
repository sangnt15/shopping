import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class EmployeeModule { }
