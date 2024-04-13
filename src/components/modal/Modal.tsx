import { useContext, useState } from "react";
import { Product, PizzaTopping } from "../../Types";
import { CartContext } from "../../context/CartContextProvider";
import { toppings } from "../../Data";
import uuid from "react-uuid";

export type ModalPropsType = {
  product: Product;
  handleClose: () => void;
};
const Modal = ({ product, handleClose }: ModalPropsType) => {
  const { dispatch } = useContext(CartContext);
  const [extraToppings, setExtraToppings] = useState<PizzaTopping[]>([]);

  function handleSelectExtraToppings(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      const topping = toppings.find((t) => t.id === Number(e.target.value));
      if (topping) {
        setExtraToppings([...extraToppings, topping]);
      }
    } else {
      setExtraToppings(
        extraToppings.filter((t) => t.id != Number(e.target.value))
      );
    }
  }

  function handleAddToCart() {
    if (product.type === "Pizza") {
      dispatch({
        type: "ADD_CART_ITEM",
        payload: {
          id: uuid(),
          product: { ...product.product, extraToppings: [...extraToppings] },
          quantity: 1,
        },
      });

      handleClose();
    } else if (product.type === "Burger") {
      dispatch({
        type: "ADD_CART_ITEM",
        payload: {
          id: uuid(),
          product: product.product,
          quantity: 1,
        },
      });
      handleClose();
    } else if (product.type === "Salad") {
      dispatch({
        type: "ADD_CART_ITEM",
        payload: {
          id: uuid(),
          product: product.product,
          quantity: 1,
        },
      });
      handleClose();
    }
  }

  return (
    <div className="modal">
      <div className="content">
        <h2>{product.product.name}</h2>
        <p>{product.product.ingredients.join(", ")}</p>
        {extraToppings.map((e) => (
          <p>{e.name}</p>
        ))}
        <p>{product.product.price}</p>
        {product.type === "Pizza" ? (
          <div>
            {toppings.map((t) => (
              <label htmlFor={t.id.toString()}>
                <input
                  type="checkbox"
                  value={t.id}
                  name={t.name}
                  id={t.id.toString()}
                  onChange={(e) => handleSelectExtraToppings(e)}
                />
                {t.name} {t.price}
              </label>
            ))}
          </div>
        ) : (
          <></>
        )}

        <button onClick={() => handleAddToCart()}>Add to cart</button>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
