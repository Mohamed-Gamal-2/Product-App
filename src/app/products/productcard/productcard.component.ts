import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css'],
})
export class ProductcardComponent implements OnInit {
  cartProducts: any[] = [];
  constructor(private router: Router, private _cart: CartService) {}
  @Input() product: Products = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
    createdAt: '',
  };
  productDetails(id: number) {
    this.router.navigate(['products', id]);
  }

  ngOnInit(): void {
    this._cart.getCart().subscribe((arr) => {
      this.cartProducts = arr;
    });
  }

  addToCart(product: Products) {
    let match = false;
    if (this.cartProducts.length == 0) {
      this.cartProducts.push({ ...product, Qty: 1 });
      match = true;
    } else {
      for (let i = 0; i < this.cartProducts.length; i++) {
        if (product.id == this.cartProducts[i].id) {
          if (product.stock > this.cartProducts[i].Qty) {
            this.cartProducts[i].Qty += 1;
            match = true;
          } else match = true;
        }
      }
      if (!match) {
        this.cartProducts.push({ ...product, Qty: 1 });
      }
    }

    this._cart.pushToCart(this.cartProducts);
  }
}
