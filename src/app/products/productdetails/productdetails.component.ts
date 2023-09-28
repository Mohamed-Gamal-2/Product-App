import { Component, OnInit } from '@angular/core';
import data from 'src/assets/products-list.json';
import { Products } from 'src/app/interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  products: Products[] = data;
  product: any;
  id: number = 0;
  value: number = 0;
  cartProducts: any = [];
  constructor(
    private activeLink: ActivatedRoute,
    private _cart: CartService,
    private _api: APIService
  ) {}
  ngOnInit(): void {
    this.value = 0;
    this.id = this.activeLink.snapshot.params['id'];
    this._cart.getCart().subscribe((arr) => {
      this.cartProducts = arr;
    });
    this._api.getProductDetails(this.id).subscribe((data) => {
      this.product = data;
    });
  }
  addToCart(product: Products) {
    let match = false;
    if (this.cartProducts.length == 0 && this.value !== 0) {
      this.cartProducts.push({ ...product, Qty: this.value });
      match = true;
    } else if (this.cartProducts.length !== 0)
      for (let i = 0; i < this.cartProducts.length; i++) {
        if (this.cartProducts[i].id == product.id) {
          if (this.cartProducts[i].Qty + this.value <= product.stock) {
            match = true;
            this.cartProducts[i].Qty += this.value;
          } else {
            match = true;
          }
        }
      }
    if (!match && this.value !== 0) {
      this.cartProducts.push({ ...product, Qty: this.value });
    }
    this._cart.pushToCart(this.cartProducts);
  }
}
