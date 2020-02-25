import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { product } from 'src/app/model/product';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : product;
  user: any = [];
  constructor
  (
      private route : ActivatedRoute,
      private productService : ProductService,
      private location : Location
  ) { 
    this.route.params.subscribe((param) => {
      let id = parseInt(param['id'],10);
      this.product = this.productService.getProductById(id);
      // let array = [3,4,7,5,8];
      // const redu =array.reduce((accumulator,currentValue) => {
      //   return accumulator + currentValue;
      // },5);
      // console.log(redu);

      // let people = [
      //   { name: 'Alice', age: 21 },
      //   { name: 'Max', age: 20 },
      //   { name: 'Jane', age: 20 }
      // ];
      // people.reduce((acc,currentValue) => {
      //   let key = currentValue.age;
      //   if(!acc[key]){
      //     acc[key]=[];
      //   }
      //   acc[key].push(currentValue);
      //   return acc;
      // },{});
      // Promise.all([])
    })
  }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'),10);
    // this.product = this.productService.getProductById(id);
    this.getAllUser()
      .then((data) => {
        this.user = data;
      });
    console.log(this.user);
  }

  canDeactivate(): Observable<boolean> | boolean | Promise<boolean> {
    // if input have ever data this function will run
    return false;
  }
  back(){
    this.location.back();
  }
  getAllUser(){
    return this.productService.getAllUser().toPromise()
    .then((data) => {
      return this.user = data;
    })
  }
}
