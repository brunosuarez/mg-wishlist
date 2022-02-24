import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { WishlistStorage } from 'src/app/wishlist-storage/wishlist-storage';
import { CardService } from '../card/card.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  titleHome = "Home";

  cards: Card[] = [];

  wishliststorage: WishlistStorage;

  constructor(private cardService: CardService) {
    this.wishliststorage = new WishlistStorage();
   }

  ngOnInit(): void {
    this.getAllCards()
  }

  getAllCards() {
    this.cardService
      .getAllProducts()
      .then((data) => {
        const wishlistProductsIds = this.wishliststorage.wishlist.items.map(product => product.id);

        this.cards = data.map(card => {
          if(wishlistProductsIds.includes(card.id)){
            return {
              ...card,
              active: true
            }
          }
          return card;
        });
      })
      .catch((error) => console.error(error));
  }

  handleCardClick(selectedCard: Card){
    const { id, active } = selectedCard;
    const updatedCard = {
      ...selectedCard,
      active: !active
    };
    this.cards = this.cards.map(card => {
      if(card.id === id){
        return updatedCard
      }
      return card
    })

    if(updatedCard && updatedCard.active){
     this.addToWishlist(updatedCard)
    }

    if(updatedCard && !updatedCard.active){
      this.removeFromWishlist(updatedCard)
    }
  }

  addToWishlist(card: Card){
    this.wishliststorage.addProduct(card);
  }

  removeFromWishlist(card: Card){
    this.cards.splice(this.cards.indexOf(card), 1);
    this.wishliststorage.removeProduct(card.id);
  }

}
