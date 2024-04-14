import {
  Pizza,
  Salad,
  Burger,
  Side,
  Soda,
  PizzaTopping,
  MenuItem,
} from "./Types";

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Veggie Pizza",
    category: "Vego",
    ingredients: ["Mushrooms", "Tomatoes", "Onions"],
    extraToppings: [],
    price: 12,
    size: "standard",
  },
  {
    id: 2,
    name: "Pepperoni & Mozarella Pizza",
    category: "Pizza",
    ingredients: ["Pepperoni", "Mozzarella", "Bell Peppers"],
    extraToppings: [],
    price: 15,
    size: "familj",
  },
  // Add more pizzas here if needed
];

// Example data for Salad type
const salads: Salad[] = [
  {
    id: 1,
    name: "Veggie Salad",
    category: "Vego",
    ingredients: ["Lettuce", "Cucumbers", "Tomatoes"],
    price: 8,
  },
  {
    id: 2,
    name: "Chicken Salad",
    category: "Chicken",
    ingredients: ["Grilled Chicken", "Mixed Greens", "Parmesan Cheese"],
    price: 10,
  },
  // Add more salads here if needed
];

// Example data for Burger type
const burgers: Burger[] = [
  {
    id: 1,
    name: "Veggie Burger",
    category: "Vego",
    ingredients: ["Beyond Meat Patty", "Lettuce", "Tomato"],
    price: 9,
    size: "90g",
  },
  {
    id: 2,
    name: "Cheese & Bacon Burger",
    category: "Meat",
    ingredients: ["Beef Patty", "Cheddar Cheese", "Bacon"],
    price: 12,
    size: "150g",
  },
  // Add more burgers here if needed
];

// Example data for Side type
const sides: Side[] = [
  {
    id: 1,
    type: "Fries",
    price: 4,
  },
  // Add more sides here if needed
];

// Example data for Soda type
export const sodas: Soda[] = [
  {
    id: 1,
    flavour: "Cola",
    size: "33cl",
    price: 2,
  },
  // Add more sodas here if needed
];

export const toppings: PizzaTopping[] = [
  { id: 3, name: "Bacon", price: 4 },
  { id: 4, name: "Jalapenos", price: 2 },
  { id: 1, name: "Olives", price: 2 },
  { id: 2, name: "Spinach", price: 3 },
];

export const menu: MenuItem[] = [
  {
    name: "Pizza",
    items: pizzas,
  },
  { name: "Salad", items: salads },
  {
    name: "Burger",
    items: burgers,
  },
  {
    name: "Soda",
    items: sodas,
  },
  {
    name: "Sides",
    items: sides,
  },
];
