import { Component } from '@angular/core';
import { CartServService } from '../cart-serv.service';
import { Item } from '../item';
import { Order } from '../orders';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent {
  orders: Order[] = this.service.cart;
  faTrash = faTrash;
  total: number = this.service.getCartTotalPrice();
  constructor(private service: CartServService) {}
  list: Item[] = [
    {
      id: 2,
      name: 'Apple',
      desc: 'FRUITS',
      price: 0.1,
      qty: 10,
      img: 'https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg',
    },
    {
      id: 3,
      name: 'Peach',
      desc: 'FRUITS',
      price: 0.3,
      qty: 20,
      img: 'https://media.self.com/photos/5b75ad5728dfab53ee567688/4:3/w_2560%2Cc_limit/GettyImages-614938268.jpg',
    },
    {
      id: 4,
      name: 'blueberry box',
      desc: 'FRUITS',
      price: 1.1,
      qty: 10,
      img: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Brightwell_Blueberry_4_650x.jpg?v=1619043964',
    },
    {
      id: 5,
      name: 'Lactose free Milk',
      desc: 'ALMARAI',
      price: 1.5,
      qty: 10,
      img: 'https://www.oncost.com/media/catalog/product/cache/3/image/570x380/9df78eab33525d08d6e5fb8d27136e95/5/0/5084_1.jpg',
    },
    {
      id: 6,
      name: 'Chocolate Milk',
      desc: 'KDD',
      price: 0.4,
      qty: 10,
      img: 'https://www.oncost.com/media/catalog/product/cache/3/image/570x380/9df78eab33525d08d6e5fb8d27136e95/2/3/23227_1.jpg',
    },
  ];
}
