import { Component } from '@angular/core';

@Component({
  selector: 'app-addnewitem',
  templateUrl: './addnewitem.component.html',
  styleUrls: ['./addnewitem.component.css'],
})
export class AddnewitemComponent {
  alertfunc() {
    alert('Item added successfully to the list ');
  }
}
