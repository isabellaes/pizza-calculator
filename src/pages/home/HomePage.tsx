import { useContext, useState } from "react";
import { MenuContext } from "../../context/MenuContextProvider";
import Menu from "../../components/menu/Menu";
import List from "../../components/list/List";
import { Product } from "../../Types";
import Modal from "../../components/modal/Modal";

const HomePage = () => {
  const { state } = useContext(MenuContext);
  const [selectedMenu, setSelectedMenu] = useState(state[0]);
  const [selectedProduct, setSelectedProduct] = useState({} as Product);

  return (
    <div className="home-container">
      <h1>HomePage</h1>
      <Menu menu={state} onSelect={setSelectedMenu}></Menu>
      <List menu={selectedMenu} setSelected={setSelectedProduct}></List>
      {selectedProduct ? <Modal product={selectedProduct}></Modal> : <></>}
    </div>
  );
};

export default HomePage;
