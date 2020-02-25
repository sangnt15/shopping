import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product } from 'src/app/model/product';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.scss']
})
export class ProductChildComponent implements OnInit {

  @Input('product') product : product;
  @Output('productOut') productOut = new EventEmitter<product>();
  constructor() {
    console.log(this.product);
   }

  ngOnInit() {
  }

  onEventProduct(product){
    this.productOut.emit(product);
  }
}
