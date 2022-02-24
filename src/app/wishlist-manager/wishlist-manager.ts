import { Card } from "../model/card";

export class Wishlist {
  items: Card[];

  constructor() {
    this.items = []
  }

  addProduct(product: Card) {
    if (!this.items.some(item => item.id === product.id)) {
      this.items.push(product);
    }
  }

  removeProduct(id: number) {
    const index = this.items.findIndex(item => item.id);
    if(index > -1) {
      this.items.splice(index, 1);
    }
  }
}
