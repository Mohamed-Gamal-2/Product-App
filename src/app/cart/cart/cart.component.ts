import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProducts: any = [];
  sum: number = 0;

  constructor(private _cart: CartService) {}
  ngOnInit(): void {
    this._cart.getCart().subscribe((arr) => {
      this.sum = 0;
      this.cartProducts = arr;
      for (const prod of this.cartProducts)
        this.sum += (prod.price - prod.discountPercentage) * prod.Qty;
    });
  }
  removeItem(product: any) {
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].id == product.id) {
        this.cartProducts.splice(i, 1);
      }
    }
    this._cart.pushToCart(this.cartProducts);
  }

  sub(product: any) {
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (product.id == this.cartProducts[i].id && product.Qty > 1) {
        this.cartProducts[i].Qty -= 1;
      }
    }
    this._cart.pushToCart(this.cartProducts);
  }

  add(product: any) {
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (
        product.id == this.cartProducts[i].id &&
        product.Qty < this.cartProducts[i].stock
      ) {
        this.cartProducts[i].Qty += 1;
      }
    }
    this._cart.pushToCart(this.cartProducts);
  }
}
