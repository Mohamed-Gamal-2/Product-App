import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductcardComponent,
    ProductdetailsComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [ProductsComponent, ProductcardComponent, ProductdetailsComponent],
})
export class ProductsModule {}
