import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { product } from '../../model/product';
import * as moment from 'moment';
import { MockExecutor } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  selectedProduct: product;
  products : product[] = [];
  productOut: product;
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.getAllProduct();
    console.log('loading...');
    let duration = moment.duration(moment('14:00',"HH:mm").diff(moment('8:00',"HH:mm")));
    let hours = duration.hours();
    console.log(hours);
    const format = 'HH:mm';
    let time = moment('15:00',format);
    let shiftStart = moment('8:00',format);
    let shiftEnd = moment('14:00',format);
    const addItemCart = (item : string) => {
      const cart = [];
      return [... cart, {item}];
    }
    console.log(addItemCart("machine oi"));
  }
  getAllProduct() : product[]{
    return this.products = this.productService.getAllProduct();
  }
  onSelect(product){
    this.selectedProduct = product;
  }
  getOutput(event){
    this.productOut = event;
  }
}
