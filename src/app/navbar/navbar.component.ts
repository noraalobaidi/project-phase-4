import { Component, Input } from '@angular/core';
import { CartServService } from '../cart-serv.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  faCartShopping = faCartShopping;
  // @Input('cart') cart!: number;
  // constructor(private service !:CartServService){}
  // service!: CartServService;
  cart: number = this.service.getCartTotalItems();

  btnclick() {
    console.log('cart ' + this.service.getCartTotalItems());
  }
  constructor(private service: CartServService) {
    // console.log('cart ' + this.cart);
  }
}
