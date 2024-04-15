import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import { calculateTotal } from "../../utils/functions";
import OrderItem from "../../components/order/OrderItem";
import Container from "../../components/container/Container";

const OrderPage = () => {
  const { state, dispatch } = useContext(CartContext);

  function handleClearCart() {
    dispatch({
      type: "CLEAR_CART",
    });
  }

  function handleIncreaseQuantity(id: string) {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  }
  function handleDecreseQuantity(id: string) {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  }

  function handleRemoveCartItem(id: string) {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: id,
    });
  }
  const total = calculateTotal(state);

  return (
    <div className="order-container">
      {state.length > 0 ? (
        <Container>
          {state.map((item) => (
            <OrderItem
              cartItem={item}
              handleIncreseQuantity={handleIncreaseQuantity}
              handleDecreseQuantity={handleDecreseQuantity}
              handleRemoveCartItem={handleRemoveCartItem}
            />
          ))}

          <div className="total-price">
            <h2>Total:</h2>
            <h2>${total}</h2>
          </div>
          <div className="dual-buttons">
            <button className="clear" onClick={handleClearCart}>
              Clear Cart
            </button>
            <button className="checkout"> Checkout </button>
          </div>
        </Container>
      ) : (
        <>
          <h1>You´re cart is empty</h1>
        </>
      )}
    </div>
  );
};

export default OrderPage;
