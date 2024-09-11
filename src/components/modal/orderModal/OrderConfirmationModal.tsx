import { useContext } from "react";
import { CartContext } from "../../../context/CartContextProvider";

const OrderConfirmationModal = () => {
  const { state } = useContext(CartContext);

  function calculateTotal() {
    return state.reduce((total, item) => {
      return total + item.product.product.price * item.quantity;
    }, 0);
  }

  return (
    <>
      <h1>Thank you for your order!</h1>

      <ul>
        {state.map((x) => (
          <>
            <h2>{x.product.product.name}</h2>
            <p>Quantity: {x.quantity}</p>
            <p>Price: ${x.product.product.price}</p>
          </>
        ))}
      </ul>
      <h2>Total: ${calculateTotal()}</h2>
    </>
  );
};

export default OrderConfirmationModal;
