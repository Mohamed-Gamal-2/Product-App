import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/app/interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductDetails(_id: number) {
    return this.http.get(`https://dummyjson.com/products/${_id}`);
  }
}
