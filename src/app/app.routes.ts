import { Home } from './components/home/home';
import { ProductsComponent } from './components/products/products';
import { CartComponent } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';
import { Routes } from '@angular/router';
import { Cadastro } from './components/cadastro/cadastro';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: ProductsComponent },
  { path: 'cadastro', component: Cadastro },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: Checkout },
];
