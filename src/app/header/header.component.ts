import { Component, OnInit } from '@angular/core';
import { AccountManagementService } from '../services/account-management.service';
import { CartService } from '../services/cart.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser: { userName: string } | null = null;
  cartItems: string[] = [];

  // EVENTS
  clickOnSignIn() {
    this.accountManagementService.login();
  }
  clickOnSignOut() {
    this.accountManagementService.logout();
  }

  // CONSTRUCTOR + INJECTED PROPERTIEs
  constructor(
    private accountManagementService: AccountManagementService,
    private cartService: CartService
  ) {
    
  }

  // LIFECYCLE HOOKS
  ngOnInit(): void {
    this.loggedInUser = this.accountManagementService.user;
    this.cartItems = this.cartService.cartItems;
  }

}
