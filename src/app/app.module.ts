import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { ItemComponent } from './item/item.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartDetailsItemComponent } from './cart-details-item/cart-details-item.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UpdatepassComponent } from './updatepass/updatepass.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { AddnewitemComponent } from './addnewitem/addnewitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ListOfItemsComponent,
    ItemComponent,
    SearchbarComponent,
    CartDetailsComponent,
    PageNotFoundComponent,
    CartDetailsItemComponent,
    PaymentgatewayComponent,
    ConfirmationComponent,
    LoginpageComponent,
    AdminpageComponent,
    UpdatepassComponent,
    ItemsListComponent,
    AddnewitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
