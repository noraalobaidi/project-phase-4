import { Injectable } from '@angular/core';
import { Order } from './orders';

@Injectable({
  providedIn: 'root',
})
export class CartServService {
  cart: Order[] = [];

  getCart(): Order[] {
    return this.cart;
  }

  getCartTotalItems(): number {
    let total = 0;
    this.cart.forEach((item) => {
      total = total + item.qty;
    });
    return total;
    // return this.cart.length;
  }
  getCartTotalPrice(): number {
    let total = 0;
    this.cart.forEach((item) => {
      total = total + item.total;
    });
    return total;
    // return this.cart.length;
  }
  // setCart(newCart: number): void {
  //   this.cart.next((newCart + this.cart).toString());
  // }
  constructor() {}
}
