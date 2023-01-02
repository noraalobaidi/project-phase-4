import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css'],
})
export class ListOfItemsComponent {
  list = [
    {
      id: 1,
      name: 'Banana',
      price: 0.2,
      qty: 10,
      img: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
    },
    {
      id: 2,
      name: 'Apple',
      price: 0.1,
      qty: 10,
      img: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
    },
    {
      id: 3,
      name: 'Peach',
      price: 0.3,
      qty: 20,
      img: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
    },
    {
      id: 4,
      name: 'blueberry box',
      price: 1.1,
      qty: 10,
      img: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
    },
    {
      id: 5,
      name: 'Lactose free Milk',
      price: 1.5,
      qty: 10,
      img: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
    },
    {
      id: 6,
      name: 'Chocolate Milk',
      price: 0.4,
      qty: 10,
      img: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920.jpg',
    },
  ];
}
