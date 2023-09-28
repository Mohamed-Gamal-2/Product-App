import { Component } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  items: number = 0;
  constructor(private _cart: CartService) {
    this._cart.getCart().subscribe((arr) => {
      this.items = arr.length;
    });
  }
}
