import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project-phase-4';

  // cart = 0;
  amount = 0.0;
  orders = [];

  list = [
    {
      id: 1,
      name: 'banana',
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
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fast-growing-trees.com%2Fproducts%2Fbrightwell-blueberry-bush&psig=AOvVaw3Bz3eAtXqlTWDcnp6YdeRY&ust=1672860396862000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIicqrqRrPwCFQAAAAAdAAAAABBs',
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
