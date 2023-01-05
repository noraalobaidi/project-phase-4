import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewitemComponent } from './addnewitem/addnewitem.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';
import { UpdatepassComponent } from './updatepass/updatepass.component';

const routes: Routes = [
  { path: 'cartDetails', component: CartDetailsComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'payment', component: PaymentgatewayComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'addNewItem', component: AddnewitemComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'admin', component: AdminpageComponent },
  { path: 'itemsList', component: ItemsListComponent },
  { path: 'updateAdmin', component: UpdatepassComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
