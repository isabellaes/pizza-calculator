import { CartItem } from "./Types";

export function calculateTotal(arr: CartItem[]): number {
  return arr.reduce((total, cartItem) => {
    return total + cartItem.product.product.price * cartItem.quantity;
  }, 0);
}
