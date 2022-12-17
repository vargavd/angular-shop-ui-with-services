export class CartService {
  cartItems: string[] = [];

  addToCart(productName: string) {
    this.cartItems.push(productName);
  }

  removeFromCart(productName: string) {
    this.cartItems.splice(this.cartItems.indexOf(productName), 1);
  }
}