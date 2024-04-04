import { Action, CartItem } from "../Types";

export const Reducer = (state: CartItem[], action: Action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return [...state, action.payload];

    default:
      return state;
  }
};
