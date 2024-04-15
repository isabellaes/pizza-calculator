import { MenuItem, Product } from "../../Types";
import { toppings, sodas } from "../../Data";
import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import uuid from "react-uuid";

type ListPropsType = {
  menu: MenuItem;
  setSelected: React.Dispatch<React.SetStateAction<Product>>;
  setModalOpen: () => void;
};

const List = ({ menu, setSelected, setModalOpen }: ListPropsType) => {
  const { dispatch } = useContext(CartContext);

  switch (menu.name) {
    case "Pizza":
      return (
        <ul>
          {menu.items.map((i) => (
            <li key={i.id}>
              <div className="list-item">
                <div>
                  <h3>{i.name}</h3>
                  <p>{i.ingredients.join(", ")}</p>
                </div>
                <div className="row">
                  <p>${i.price}</p>
                  <button
                    onClick={() => {
                      setSelected({
                        type: "Pizza",
                        product: i,
                        toppings: toppings,
                        soda: sodas,
                      });
                      setModalOpen();
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      );

    case "Burger":
      return (
        <ul className="content">
          {menu.items.map((i) => (
            <li key={i.id}>
              <div className="list-item">
                <div>
                  <h3>{i.name}</h3>
                  <p>{i.ingredients.join(", ")}</p>
                </div>
                <div className="row">
                  <p>${i.price}</p>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "ADD_CART_ITEM",
                        payload: {
                          id: uuid(),
                          type: "Burger",
                          product: i,
                          quantity: 1,
                        },
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    case "Salad":
      return (
        <ul className="content">
          {menu.items.map((i) => (
            <li key={i.id}>
              <div className="list-item">
                <div>
                  <h3>{i.name}</h3>
                  <p>{i.ingredients.join(", ")}</p>
                </div>
                <div className="row">
                  <p>${i.price}</p>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "ADD_CART_ITEM",
                        payload: {
                          id: uuid(),
                          type: "Salad",
                          product: i,
                          quantity: 1,
                        },
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    case "Soda":
      return (
        <ul className="content">
          {menu.items.map((i) => (
            <li key={i.id}>
              <div className="list-item">
                <h3> {i.name}</h3>
                <div className="row">
                  <p>${i.price}</p>
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
              </div>
            </li>
          ))}
        </ul>
      );
    case "Sides":
      return (
        <ul className="content">
          {menu.items.map((i) => (
            <li key={i.id}>
              <div className="list-item">
                <h3>{i.name}</h3>
                <div className="row">
                  <p>${i.price}</p>
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
