import { Component, Input } from '@angular/core';
import { Item } from '../item';
import { AppComponent } from '../app.component';
import { CartServService } from '../cart-serv.service';
import { Order } from '../orders';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input('item') item!: Item;
  // @Input('cart') cart!: number;
  cart: Order[] = this.service.getCart();
  cartTotalItems: number = this.service.getCartTotalItems();
  // @Input()
  // public AppComponent!: AppComponent;
  itemamount: number = 0;
  itemid: number = 0;

  incrementItem() {
    this.itemamount++;
    // this.service.cart.push({
    //   Itemid: 1,
    //   name: 'apple',
    //   total: 10,
    //   qty: 50,
    //   img: 'hehe',
    // });
    // console.log(this.cartTotalItems);
    // this.service.cart = this.cart;
    // console.log(this.service.getCartTotalItems());
  }

  decrementItem() {
    if (this.itemamount > 0) {
      this.itemamount--;
    }
  }

  addItemToCart() {
    this.cart.forEach((order) => {
      if (order.Itemid == this.item.id) {
        order.qty = this.itemamount + order.qty;
        order.total = order.qty * this.item.price;
        alert('Item updated successfully'); //put toast instead
        this.itemid = this.item.id;
        this.itemamount = 0;
      }
    });
    if (this.itemid != this.item.id) {
      this.service.cart.push({
        Itemid: this.item.id,
        name: this.item.name,
        desc: this.item.desc,
        total: this.item.price * this.itemamount,
        qty: this.itemamount,
        img: this.item.img,
      });
      alert('Item added successfully'); //put toast instead
      this.itemamount = 0;
    }
    this.itemid = 0;
  }

  constructor(private service: CartServService) {
    console.log('cart ' + this.cart);
  }
}
