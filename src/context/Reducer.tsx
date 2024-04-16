import { Action, CartItem } from "../utils/Types";

export const Reducer = (state: CartItem[], action: Action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      return [...state, action.payload];
    case "REMOVE_CART_ITEM":
      return state.filter((i) => i.id != action.payload);

    case "CLEAR_CART":
      state = [];
      return state;

    case "INCREASE_QUANTITY":
      return state.map((i) => {
        if (i.id === action.payload) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        } else {
          return i;
        }
      });

    case "DECREASE_QUANTITY":
      return state.map((i) => {
        if (i.id === action.payload && i.quantity >= 2) {
          return {
            ...i,
            quantity: i.quantity - 1,
          };
        } else {
          return i;
        }
      });
    default:
      return state;
  }
};
