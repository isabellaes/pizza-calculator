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
  const [quantity, setQuantity] = useState(1);

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
    if (product.type === "Pizza" && extraToppings) {
      const extras = extraToppings.reduce((total, topping) => {
        return total + topping.price;
      }, 0);
      const updatedProductPrice = product.product.price + extras;
      dispatch({
        type: "ADD_CART_ITEM",
        payload: {
          id: uuid(),
          product: {
            type: product.type,
            product: {
              id: product.product.id,
              ingredients: product.product.ingredients,
              extraToppings: [...extraToppings],
              price: updatedProductPrice,
              category: product.product.category,
              name: product.product.name,
              size: product.product.size,
            },
          },
          quantity: quantity,
        },
      });
    } else {
      dispatch({
        type: "ADD_CART_ITEM",
        payload: {
          id: uuid(),
          product: {
            ...product,
          },
          quantity: quantity,
        },
      });
    }

    handleClose();
  }

  function calculateTotal() {
    if (extraToppings) {
      const extras = extraToppings.reduce((total, topping) => {
        return total + topping.price;
      }, 0);
      const updatedProductPrice = product.product.price + extras;
      return updatedProductPrice * quantity;
    }
    return product.product.price * quantity;
  }

  return (
    <div className="modal">
      <div className="content">
        <div className="row">
          <div>
            <h2>{product.product.name}</h2>
            {product.type === "Pizza" ||
            product.type === "Burger" ||
            product.type === "Salad" ? (
              <p>{product.product.ingredients.join(", ")}</p>
            ) : (
              <></>
            )}
          </div>
          <p>${product.product.price}</p>
        </div>

        {extraToppings.map((e) => (
          <p className="extra-toppings">- {e.name}</p>
        ))}

        {product.type === "Pizza" ? (
          <div>
            <h3>Add extra toppings</h3>
            {toppings.map((t) => (
              <label htmlFor={t.id.toString()}>
                <input
                  type="checkbox"
                  value={t.id}
                  name={t.name}
                  id={t.id.toString()}
                  onChange={(e) => handleSelectExtraToppings(e)}
                />
                {t.name} ${t.price}
              </label>
            ))}
          </div>
        ) : (
          <></>
        )}
        <div className="row">
          <label htmlFor="quantity">
            Quantity:
            <input
              id="quantity"
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.currentTarget.value))}
            />
          </label>
          <h3>Total: ${calculateTotal()}</h3>
        </div>

        <div className="row">
          <button className="remove-button" onClick={handleClose}>
            Close
          </button>
          <button onClick={() => handleAddToCart()}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
