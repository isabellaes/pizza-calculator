import { ReactNode, createContext, useReducer } from "react";
import { CartItem, Action } from "../utils/Types";
import { Reducer } from "./Reducer";

type InitialCartContextValue = {
  state: CartItem[];
  dispatch: React.Dispatch<Action>;
};

type CartContextProviderType = {
  children: ReactNode;
};

export const CartContext = createContext<InitialCartContextValue>({
  state: [],
  dispatch: () => null,
});

const initialState: CartItem[] = [];

const CartContextProvider = ({ children }: CartContextProviderType) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
