import { Component } from '@angular/core';

import { Texts } from '../../sample-data';
import { CartService } from '../services/cart.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // PROPERTIES
  cardInfos: {
    added: boolean,
    text: string
  } [] = Texts.map(text => ({
    added: false,
    text
  }));

  addToCart(index: number) {
    this.cardInfos[index].added = true;
    this.cartService.addToCart(`Product Title ${index+1}`);

    this.loggingService.addToLog(`Added 'Product Title ${index+1}' from cart`);
  }

  removeFromCart(index: number) {
    this.cardInfos[index].added = false;
    this.cartService.removeFromCart(`Product Title ${index+1}`);

    this.loggingService.addToLog(`Removed 'Product Title ${index+1}' from cart`);
  }

  constructor(
    private cartService: CartService,
    private loggingService: LoggingService
  ) { }

}
