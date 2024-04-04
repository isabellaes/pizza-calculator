import { ReactNode, createContext, useContext } from "react";
import { MenuItem } from "../Types";

import { menu } from "../Data";
export type ContextProviderType = {
  children: ReactNode;
};
export type InitialContextValue = {
  state: MenuItem[];
};
export const MenuContext = createContext<InitialContextValue>({
  state: menu,
});

const MenuContextProvider = ({ children }: ContextProviderType) => {
  const { state } = useContext(MenuContext);

  return (
    <MenuContext.Provider value={{ state }}>{children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;
