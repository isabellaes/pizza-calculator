import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
const OrderPage = () => {
  const { state } = useContext(CartContext);
  return (
    <div>
      <h1>OrderPage</h1>
      <p>{state.length}</p>
    </div>
  );
};

export default OrderPage;
