import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private _api: APIService) {}
  ngOnInit(): void {
    this._api.getAllProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
