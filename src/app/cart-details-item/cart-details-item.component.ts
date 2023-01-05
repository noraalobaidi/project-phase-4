import { Component, Input } from '@angular/core';
import { CartServService } from '../cart-serv.service';
import { Order } from '../orders';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-details-item',
  templateUrl: './cart-details-item.component.html',
  styleUrls: ['./cart-details-item.component.css'],
})
export class CartDetailsItemComponent {
  faTrash = faTrash;
  @Input('order') order!: Order;
  cart: Order[] = this.service.getCart();

  removeItem() {
    this.cart.forEach((order) => {
      if (order.Itemid == this.order.Itemid) {
        this.cart.splice(this.cart.indexOf(order), 1);
      }
    });
  }

  // addItemToCart() {
  //   this.cart.forEach((order) => {
  //     if (order.Itemid == this.item.id) {
  //       order.qty = this.itemamount + order.qty;
  //       order.total = order.qty * this.item.price;
  //       alert('Item updated successfully'); //put toast instead
  //       this.itemid = this.item.id;
  //       this.itemamount = 0;
  //     }
  //   });
  //   if (this.itemid != this.item.id) {
  //     this.service.cart.push({
  //       Itemid: this.item.id,
  //       name: this.item.name,
  //       total: this.item.price * this.itemamount,
  //       qty: this.itemamount,
  //       img: this.item.img,
  //     });
  //     alert('Item added successfully'); //put toast instead
  //     this.itemamount = 0;
  //   }
  //   this.itemid = 0;
  // }
  constructor(private service: CartServService) {
    // console.log('cart ' + this.cart);
  }
}
