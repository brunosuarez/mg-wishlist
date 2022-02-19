import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { WishlistProductsComponent } from './components/wishlist-products/wishlist-products.component';
import { HeaderComponent } from './shared/components/templates/header/header.component';
import { SearchComponent } from './shared/components/templates/search/search.component';
import { CardComponent } from './shared/components/templates/card/card.component';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    WishlistProductsComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
