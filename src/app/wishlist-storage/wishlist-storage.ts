import { Card } from '../model/card';
import { Wishlist } from '../wishlist-manager/wishlist-manager';

export class WishlistStorage {

  wishlist: Wishlist;

  constructor() {
    this.wishlist = new Wishlist();
    let temp = JSON.parse(localStorage.getItem('wishlist') || '{}').items;

    if(!temp){
      return
    }

    for(let item of temp){
      this.wishlist.addProduct(item);
    }
  }

  addProduct(product: Card) {
    this.wishlist.addProduct(product);
    this.saveWishlist();
  }

  saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }

  removeProduct(id: number) {
    this.wishlist.removeProduct(id);
    this.saveWishlist();
  }
}
