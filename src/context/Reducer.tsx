import { Action, CartItem } from "../Types";

export const Reducer = (state: CartItem[], action: Action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return [...state, action.payload];
      case "REMOVE_CART_ITEM":
        return state.filter((i) => i.id != action.payload);

    case "CLEAR_CART":
      state = [];
      return state;
    default:
      return state;
  }
};
