import { WishlistStorage } from '../../wishlist-storage/wishlist-storage';
import { Card } from '../../model/card';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  @Input() showCloseIcon: boolean = false;
  @Input() showFavoriteIcon: boolean = false;
  @Input() cards: Card[] = [];

  @Output() onFavoriteClick = new EventEmitter<Card>();

  wishliststorage: WishlistStorage;

  constructor(private cardService: CardService) {
    this.wishliststorage = new WishlistStorage();
  }

  handleCardClick(selectedCard: Card){
    this.onFavoriteClick.emit(selectedCard)
  }

  removeFromWishlist(card: Card){
    this.cards.splice(this.cards.indexOf(card), 1);
    this.wishliststorage.removeProduct(card.id);
  }

}
