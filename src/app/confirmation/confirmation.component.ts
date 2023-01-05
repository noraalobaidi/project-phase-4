import { Component } from '@angular/core';
import { CartServService } from '../cart-serv.service';
import { Order } from '../orders';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  faCircleCheck = faCircleCheck;

  orders: Order[] = this.service.cart;
  total: number = this.service.getCartTotalPrice();
  constructor(private service: CartServService) {}
}
