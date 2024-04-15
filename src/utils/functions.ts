import { CartItem } from "../Types";

export function calculateTotal(arr: CartItem[]): number {
  return arr.reduce((total, cartItem) => {
    return total + cartItem.product.price * cartItem.quantity;
  }, 0);
}
