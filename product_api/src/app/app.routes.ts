import { Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { AddProductComponent } from './add-product/add-product.component';

export const routes: Routes = [
    {path: '', component: ProductCardComponent},
    {path: 'add-product', component: AddProductComponent}
];
