import { Component } from '@angular/core';
import { CartServService } from '../cart-serv.service';
import { Order } from '../orders';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent {
  orders: Order[] = this.service.cart;
  total: number = this.service.getCartTotalPrice();
  constructor(private service: CartServService) {}
}
