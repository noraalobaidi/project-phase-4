import { Component, Input } from '@angular/core';
import { Item } from '../item';
import { Order } from '../orders';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  // @Input('list') list!: Item[];
  // @Input('cart') cart!: number;
  // @Input('amount') amount!: number;
  // @Input('orders') orders!: Order[];
}
