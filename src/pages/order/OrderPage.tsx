import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import { calculateTotal } from "../../utils/functions";
import OrderItem from "../../components/order/OrderItem";
import Container from "../../components/container/Container";
import { useToggleModal } from "../../hooks/useToggleModal";
import Modal from "../../components/modal/modalcontainer/Modal";
import OrderConfirmationModal from "../../components/modal/orderModal/OrderConfirmationModal";

const OrderPage = () => {
  const { state, dispatch } = useContext(CartContext);
  const { open, setModalOpen, setModalClosed } = useToggleModal();

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
        <>
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
              <button
                className="checkout"
                onClick={() => {
                  setModalOpen();
                }}
              >
                Checkout
              </button>
            </div>
          </Container>
          {open ? (
            <Modal
              handleClose={() => {
                handleClearCart();
                setModalClosed();
              }}
            >
              <OrderConfirmationModal />
            </Modal>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <h1>You´re cart is empty</h1>
        </>
      )}
    </div>
  );
};

export default OrderPage;
