import { ListProductsComponent } from './components/list-products/list-products.component';
import { WishlistProductsComponent } from './components/wishlist-products/wishlist-products.component';
import { CardComponent } from './components/card/card.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ListProductsComponent
  },
  {
    path: "wishlist",
    component: WishlistProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
