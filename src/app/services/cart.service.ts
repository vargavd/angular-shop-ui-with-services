import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class CartService {
  cartItems: string[] = [];

  constructor(private loggingService: LoggingService) { }

  addToCart(productName: string) {
    this.cartItems.push(productName);

    this.loggingService.addToLog(`Added '${productName}' to cart`);

  }

  removeFromCart(productName: string) {
    this.cartItems.splice(this.cartItems.indexOf(productName), 1);

    this.loggingService.addToLog(`Removed '${productName}' from cart`);
  }
}