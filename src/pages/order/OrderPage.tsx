import { CartContext } from "../../context/CartContextProvider";
import { useContext } from "react";
const OrderPage = () => {
  const { state } = useContext(CartContext);

  return (
    <div>
      {state.map((i) => {
        switch (i.type) {
          case "Soda":
            return (
              <div>
                <h2>{i.product.flavour}</h2>
                <p>{i.quantity}</p>
                <p>{i.product.price}</p>
              </div>
            );
          case "Side":
            return (
              <div>
                <h2>{i.product.type}</h2>
                <p>{i.quantity}</p>
                <p>{i.product.price}</p>
              </div>
            );

          case "Pizza":
          case "Salad":
          case "Burger":
            return (
              <div>
                <h2>{i.product.name}</h2>
                <p>{i.product.ingredients.join(", ")}</p>
                <p>{i.quantity}</p>
                <p>{i.product.price}</p>
              </div>
            );
        }
      })}
    </div>
  );
};

export default OrderPage;
