import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CartItem } from "../../utils/Types";

type OrderItemProps = {
  cartItem: CartItem;
  handleIncreseQuantity: (id: string) => void;
  handleDecreseQuantity: (id: string) => void;
  handleRemoveCartItem: (id: string) => void;
};

const OrderItem = ({
  cartItem,
  handleIncreseQuantity,
  handleDecreseQuantity,
  handleRemoveCartItem,
}: OrderItemProps) => {
  return (
    <div className="item">
      <div>
        <h2>{cartItem.product.product.name}</h2>
        {cartItem.product.type === "Salad" ||
        cartItem.product.type === "Burger" ||
        cartItem.product.type === "Pizza" ? (
          <>{cartItem.product.product.ingredients.join(", ")}</>
        ) : (
          <></>
        )}
        {cartItem.product.type === "Pizza" ? (
          <>
            {" "}
            {cartItem.product.product.extraToppings.map((t) => (
              <p className="extra-toppings">- {t.name}</p>
            ))}
          </>
        ) : (
          <></>
        )}
        <p>${cartItem.product.product.price * cartItem.quantity}</p>
      </div>
      <div className="update-cartitem-btn">
        <button onClick={() => handleDecreseQuantity(cartItem.id)}>
          <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
        </button>
        <p className="item-quantity"> {cartItem.quantity}</p>
        <button onClick={() => handleIncreseQuantity(cartItem.id)}>
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
        </button>
        <button
          className="remove-button"
          onClick={() => handleRemoveCartItem(cartItem.id)}
        >
          <DeleteForeverIcon></DeleteForeverIcon>
        </button>
      </div>
    </div>
  );
};

export default OrderItem;
