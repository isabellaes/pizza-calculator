import { ReactNode, createContext, useContext } from "react";
import { Product } from "../utils/Types";

import { products } from "../utils/Data";
export type ContextProviderType = {
  children: ReactNode;
};
export type InitialContextValue = {
  state: Product[];
};
export const MenuContext = createContext<InitialContextValue>({
  state: products,
});

const MenuContextProvider = ({ children }: ContextProviderType) => {
  const { state } = useContext(MenuContext);

  return (
    <MenuContext.Provider value={{ state }}>{children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;
