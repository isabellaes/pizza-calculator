export type Action =
  | { type: "ADD_CART_ITEM"; payload: CartItem }
  | { type: "REMOVE_CART_ITEM"; payload: string }
  | { type: "CLEAR_CART" }
  | {
      type: "UPDATE_CART_ITEM";
      payload: string;
    }
  | {
      type: "INCREASE_QUANTITY";
      payload: string;
    }
  | { type: "DECREASE_QUANTITY"; payload: string };

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
};

export type PizzaTopping = {
  id: number;
  name: string;
  price: number;
};

export type Product =
  | {
      type: "Pizza";
      product: {
        id: number;
        name: string;
        category: "Vego" | "Pizza";
        ingredients: string[];
        extraToppings: PizzaTopping[];
        price: number;
        size: "standard" | "barn" | "familj";
      };
    }
  | {
      type: "Salad";
      product: {
        id: number;
        name: string;
        category: "Vego" | "Chicken" | "Kebab";
        ingredients: string[];
        price: number;
      };
    }
  | {
      type: "Burger";
      product: {
        id: number;
        name: string;
        category: "Vego" | "Chicken" | "Meat";
        ingredients: string[];
        price: number;
        size: "90g" | "150g";
      };
    }
  | {
      type: "Side";
      product: {
        id: number;
        name: string;
        price: number;
      };
    }
  | {
      type: "Soda";
      product: {
        id: number;
        name: string;
        size: "33cl";
        price: number;
      };
    };
