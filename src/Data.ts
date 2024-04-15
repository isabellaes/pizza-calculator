import { PizzaTopping, Product } from "./Types";

export const products: Product[] = [
  {
    type: "Pizza",
    product: {
      id: 1,
      name: "Veggie Pizza",
      category: "Vego",
      ingredients: ["Mushrooms", "Tomatoes", "Onions"],
      extraToppings: [],
      price: 12,
      size: "standard",
    },
  },
  {
    type: "Pizza",
    product: {
      id: 2,
      name: "Pepperoni & Mozarella Pizza",
      category: "Pizza",
      ingredients: ["Pepperoni", "Mozzarella", "Bell Peppers"],
      extraToppings: [],
      price: 15,
      size: "familj",
    },
  },
  {
    type: "Burger",
    product: {
      id: 1,
      name: "Veggie Burger",
      category: "Vego",
      ingredients: ["Beyond Meat Patty", "Lettuce", "Tomato"],
      price: 9,
      size: "90g",
    },
  },
  {
    type: "Burger",
    product: {
      id: 2,
      name: "Cheese & Bacon Burger",
      category: "Meat",
      ingredients: ["Beef Patty", "Cheddar Cheese", "Bacon"],
      price: 12,
      size: "150g",
    },
  },
  {
    type: "Salad",
    product: {
      id: 1,
      name: "Veggie Salad",
      category: "Vego",
      ingredients: ["Lettuce", "Cucumbers", "Tomatoes"],
      price: 8,
    },
  },
  {
    type: "Salad",
    product: {
      id: 2,
      name: "Chicken Salad",
      category: "Chicken",
      ingredients: ["Grilled Chicken", "Mixed Greens", "Parmesan Cheese"],
      price: 10,
    },
  },
  {
    type: "Side",
    product: {
      id: 1,
      name: "Fries",
      price: 4,
    },
  },
  {
    type: "Soda",
    product: {
      id: 1,
      name: "Cola",
      size: "33cl",
      price: 2,
    },
  },
];

export const toppings: PizzaTopping[] = [
  { id: 3, name: "Bacon", price: 4 },
  { id: 4, name: "Jalapenos", price: 2 },
  { id: 1, name: "Olives", price: 2 },
  { id: 2, name: "Spinach", price: 3 },
];
