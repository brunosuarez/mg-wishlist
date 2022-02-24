import { CardService } from '../card/card.service';
import { Component, OnInit } from '@angular/core';
import { WishlistStorage } from 'src/app/wishlist-storage/wishlist-storage';
import { Card } from 'src/app/model/card';
@Component({
  selector: 'app-wishlist-products',
  templateUrl: './wishlist-products.component.html',
  styleUrls: ['./wishlist-products.component.css'],
})
export class WishlistProductsComponent implements OnInit {

  titleHome = "Home";
  titleList = "Lista de Desejos";

  cards: Card[] = [];

  wishliststorage: WishlistStorage;

  constructor(private cardService: CardService) {
    this.wishliststorage = new WishlistStorage();
  }

  ngOnInit(): void {
    this.getCardsWishlist();
  }

  getCardsWishlist() {
    this.cards = this.wishliststorage.wishlist.items;
  }
}
