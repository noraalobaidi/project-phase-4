import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentgatewayComponent } from './paymentgateway/paymentgateway.component';

const routes: Routes = [
  { path: 'cartDetails', component: CartDetailsComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'payment', component: PaymentgatewayComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'login', component: LoginpageComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
