import { Injectable } from '@angular/core';
import { products } from '../mock-api/product';
import { product } from '../model/product';
import { HttpHeaders,HttpClient }    from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : product[] = products;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
    this.getAllProduct();
   }

  getAllProduct() : product[]{
    return this.products;
  }
  getProductById(id) : product{
    return this.products.find((product) => product.id === id);
  }
  getAllUser() : Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      tap((data) => data)
    );
  }
}
