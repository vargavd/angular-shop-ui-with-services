import { Component } from '@angular/core';

import { Texts } from '../../sample-data';
import { CartService } from '../services/cart.service';

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
  }

  removeFromCart(index: number) {
    this.cardInfos[index].added = false;
    this.cartService.removeFromCart(`Product Title ${index+1}`);
  }

  constructor(
    private cartService: CartService,
  ) { }

}
