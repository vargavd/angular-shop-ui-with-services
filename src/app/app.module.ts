import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelpersService } from './services/helpers.service';
import { AccountManagementService } from './services/account-management.service';
import { LoggingService } from './services/logging.service';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LoggingService,
    AccountManagementService,
    HelpersService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
