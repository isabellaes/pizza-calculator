import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const OrderPage = () => {
  const { state, dispatch } = useContext(CartContext);

  function handleClearCart() {
    dispatch({
      type: "CLEAR_CART",
    });
  }

  function calculateTotal(): number {
    return state.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
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
  const total = calculateTotal();

  return (
    <div className="order-container">
      {state.length > 0 ? (
        <div className="content">
          {state.map((i) => {
            switch (i.type) {
              case "Soda":
                return (
                  <div className="item">
                    <div>
                      <h2>{i.product.flavour}</h2>
                      <p>${i.product.price}</p>
                    </div>
                    <div className="update-cartitem-btn">
                      <button onClick={() => handleDecreseQuantity(i.id)}>
                        <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                      </button>
                      <p className="item-quantity"> {i.quantity}</p>
                      <button onClick={() => handleIncreaseQuantity(i.id)}>
                        <AddCircleOutlineIcon></AddCircleOutlineIcon>
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveCartItem(i.id)}
                      >
                        <DeleteForeverIcon></DeleteForeverIcon>
                      </button>
                    </div>
                  </div>
                );
              case "Side":
                return (
                  <div className="item">
                    <div>
                      <h2>{i.product.type}</h2>
                      <p>${i.product.price}</p>
                    </div>

                    <div className="update-cartitem-btn">
                      <button onClick={() => handleDecreseQuantity(i.id)}>
                        <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                      </button>
                      <p className="item-quantity"> {i.quantity}</p>
                      <button onClick={() => handleIncreaseQuantity(i.id)}>
                        <AddCircleOutlineIcon></AddCircleOutlineIcon>
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveCartItem(i.id)}
                      >
                        <DeleteForeverIcon></DeleteForeverIcon>
                      </button>
                    </div>
                  </div>
                );

              case "Pizza":
                return (
                  <div className="item">
                    <div>
                      <h2>{i.product.name}</h2>
                      <p>{i.product.ingredients.join(", ")}</p>
                      {i.product.extraToppings.map((t) => (
                        <p className="extra-toppings">- {t.name}</p>
                      ))}
                      <p>${i.product.price * i.quantity}</p>
                    </div>

                    <div className="update-cartitem-btn">
                      <button onClick={() => handleDecreseQuantity(i.id)}>
                        <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                      </button>
                      <p className="item-quantity"> {i.quantity}</p>
                      <button onClick={() => handleIncreaseQuantity(i.id)}>
                        <AddCircleOutlineIcon></AddCircleOutlineIcon>
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveCartItem(i.id)}
                      >
                        <DeleteForeverIcon></DeleteForeverIcon>
                      </button>
                    </div>
                  </div>
                );
              case "Salad":
              case "Burger":
                return (
                  <div className="item">
                    <div>
                      <h2>{i.product.name}</h2>
                      <p>{i.product.ingredients.join(", ")}</p>
                      <p>${i.product.price}</p>
                    </div>

                    <div className="update-cartitem-btn">
                      <button onClick={() => handleDecreseQuantity(i.id)}>
                        <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                      </button>
                      <p className="item-quantity"> {i.quantity}</p>
                      <button onClick={() => handleIncreaseQuantity(i.id)}>
                        <AddCircleOutlineIcon></AddCircleOutlineIcon>
                      </button>
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveCartItem(i.id)}
                      >
                        <DeleteForeverIcon></DeleteForeverIcon>
                      </button>
                    </div>
                  </div>
                );
            }
          })}
          <div>
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
          </div>
        </div>
      ) : (
        <>
          <h1>You´re cart is empty</h1>
        </>
      )}
    </div>
  );
};

export default OrderPage;
