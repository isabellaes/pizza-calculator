import { MenuItem, Product } from "../../Types";
import { toppings, sodas } from "../../Data";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import uuid from "react-uuid";

type ListPropsType = {
  menu: MenuItem;
  setSelected: React.Dispatch<React.SetStateAction<Product>>;
};

const List = ({ menu, setSelected }: ListPropsType) => {
  const { state, dispatch } = useContext(CartContext);

  switch (menu.name) {
    case "Pizza":
      return (
        <ul>
          {menu.items.map((i) => (
            <li
              key={i.id}
              onClick={() =>
                setSelected({
                  type: "Pizza",
                  product: i,
                  toppings: toppings,
                  soda: sodas,
                })
              }
            >
              {i.name}
            </li>
          ))}
        </ul>
      );

    case "Burger":
      return (
        <ul>
          {menu.items.map((i) => (
            <li
              key={i.id}
              onClick={() =>
                setSelected({
                  type: "Burger",
                  product: i,
                  soda: sodas,
                })
              }
            >
              {i.name}
            </li>
          ))}
        </ul>
      );
    case "Salad":
      return (
        <ul>
          {menu.items.map((i) => (
            <li
              key={i.id}
              onClick={() =>
                setSelected({
                  type: "Salad",
                  product: i,
                  soda: sodas,
                })
              }
            >
              {i.name}
            </li>
          ))}
        </ul>
      );
    case "Soda":
      return (
        <ul>
          {menu.items.map((i) => (
            <>
              <li key={i.id}>{i.flavour}</li>
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_CART_ITEM",
                    payload: {
                      id: uuid(),
                      product: i,
                      quantity: 1,
                    },
                  })
                }
              >
                Add to cart
              </button>
            </>
          ))}
        </ul>
      );
    case "Sides":
      return (
        <ul>
          {menu.items.map((i) => (
            <>
              <li key={i.id}>{i.type}</li>
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_CART_ITEM",
                    payload: {
                      id: uuid(),
                      product: i,
                      quantity: 1,
                    },
                  })
                }
              >
                Add to cart
              </button>
            </>
          ))}
        </ul>
      );

    default:
      break;
  }
};

export default List;
