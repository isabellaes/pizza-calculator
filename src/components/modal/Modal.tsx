import { useContext } from "react";
import { Product } from "../../Types";
import { CartContext } from "../../context/CartContextProvider";
import uuid from "react-uuid";

export type ModalPropsType = {
  product: Product;
};
const Modal = ({ product }: ModalPropsType) => {
  const { state, dispatch } = useContext(CartContext);
  switch (product.type) {
    case "Pizza":
      return (
        <div>
          <p>{product.product.name}</p>
          <p>{product.product.ingredients}</p>
          <p>{product.product.category}</p>
          <p>{product.product.price}</p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_CART_ITEM",
                payload: {
                  id: uuid(),
                  product: product.product,
                  quantity: 1,
                },
              })
            }
          >
            Add to cart
          </button>
        </div>
      );
    case "Salad":
      return (
        <div>
          <p>{product.product.name}</p>
          <p>{product.product.ingredients}</p>
          <p>{product.product.category}</p>
          <p>{product.product.price}</p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_CART_ITEM",
                payload: {
                  id: uuid(),
                  product: product.product,
                  quantity: 1,
                },
              })
            }
          >
            Add to cart
          </button>
        </div>
      );
    case "Burger":
      return (
        <div>
          <p>{product.product.name}</p>
          <p>{product.product.ingredients}</p>
          <p>{product.product.category}</p>
          <p>{product.product.price}</p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_CART_ITEM",
                payload: {
                  id: uuid(),
                  product: product.product,
                  quantity: 1,
                },
              })
            }
          >
            Add to cart
          </button>
        </div>
      );
    default:
      break;
  }
};

export default Modal;
