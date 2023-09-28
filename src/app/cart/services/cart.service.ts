import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart;

  constructor() {
    this.cart = new BehaviorSubject([]);
  }

  getCart() {
    return this.cart.asObservable();
  }

  pushToCart(products: any) {
    this.cart.next(products);
  }
}
