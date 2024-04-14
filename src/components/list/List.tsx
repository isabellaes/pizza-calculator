import { MenuItem, Product } from "../../Types";
import { toppings, sodas } from "../../Data";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import uuid from "react-uuid";

type ListPropsType = {
  menu: MenuItem;
  setSelected: React.Dispatch<React.SetStateAction<Product>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const List = ({ menu, setSelected, setModalOpen }: ListPropsType) => {
  const { state, dispatch } = useContext(CartContext);

  switch (menu.name) {
    case "Pizza":
      return (
        <ul>
          {menu.items.map((i) => (
            <li
              key={i.id}
              onClick={() => {
                setSelected({
                  type: "Pizza",
                  product: i,
                  toppings: toppings,
                  soda: sodas,
                });
                setModalOpen(true);
              }}
            >
              <div className="list-item">
                <h3>{i.name}</h3>
                <p>{i.ingredients.join(", ")}</p>
                <p>{i.price}</p>
              </div>
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
              <div className="list-item">
                <h3>{i.name}</h3>
                <p>{i.ingredients.join(", ")}</p>
                <p>{i.price}</p>
              </div>
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
              <div className="list-item">
                <h3>{i.name}</h3>
                <p>{i.ingredients.join(", ")}</p>
                <p>{i.price}</p>
              </div>
            </li>
          ))}
        </ul>
      );
    case "Soda":
      return (
        <ul>
          {menu.items.map((i) => (
            <li key={i.id}>
              <div className="list-item">
                <h3> {i.flavour}</h3>
                <p>{i.price}</p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_CART_ITEM",
                      payload: {
                        id: uuid(),
                        type: "Soda",
                        product: i,
                        quantity: 1,
                      },
                    })
                  }
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      );
    case "Sides":
      return (
        <ul>
          {menu.items.map((i) => (
            <li key={i.id}>
              <div className="list-item">
                <h3>{i.type}</h3>
                <p>{i.price}</p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_CART_ITEM",
                      payload: {
                        id: uuid(),
                        type: "Side",
                        product: i,
                        quantity: 1,
                      },
                    })
                  }
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      );

    default:
      break;
  }
};

export default List;
