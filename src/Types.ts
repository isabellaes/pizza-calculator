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

export type MenuItem =
  | {
      name: "Pizza";
      items: Pizza[];
    }
  | {
      name: "Burger";
      items: Burger[];
    }
  | {
      name: "Salad";
      items: Salad[];
    }
  | {
      name: "Soda";
      items: Soda[];
    }
  | {
      name: "Sides";
      items: Side[];
    };

export type CartItem =
  | {
      id: string;
      type: "Pizza" | "Salad" | "Burger";
      product: Pizza | Burger | Salad;
      quantity: number;
    }
  | {
      id: string;
      type: "Soda";
      product: Soda;
      quantity: number;
    }
  | {
      id: string;
      type: "Side";
      product: Side;
      quantity: number;
    };

export type Pizza = {
  id: number;
  name: string;
  category: "Vego" | "Pizza";
  ingredients: string[];
  extraToppings: PizzaTopping[];
  price: number;
  size: "standard" | "barn" | "familj";
};
export type Salad = {
  id: number;
  name: string;
  category: "Vego" | "Chicken" | "Kebab";
  ingredients: string[];
  price: number;
};
export type Burger = {
  id: number;
  name: string;
  category: "Vego" | "Chicken" | "Meat";
  ingredients: string[];
  price: number;
  size: "90g" | "150g";
};

export type Side = {
  id: number;
  type: "Fries";
  price: number;
};

export type Soda = {
  id: number;
  flavour: string;
  size: "33cl";
  price: number;
};

export type PizzaTopping = {
  id: number;
  name: string;
  price: number;
};

export type Product =
  | {
      type: "Pizza";
      product: Pizza;
      toppings: PizzaTopping[];
      soda: Soda[];
    }
  | {
      type: "Salad";
      product: Salad;
      soda: Soda[];
    }
  | {
      type: "Burger";
      product: Burger;
      soda: Soda[];
    };
