import { CartItem } from "../../../utils/Types";

type OrderConfirmationModalProps = {
  items: CartItem[];
};

const OrderConfirmationModal = () => {
  return (
    <>
      <h1>Thank you for your order!</h1>
    </>
  );
};

export default OrderConfirmationModal;
