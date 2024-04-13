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
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="home-container">
      <Menu menu={state} onSelect={setSelectedMenu}></Menu>
      <List
        menu={selectedMenu}
        setSelected={setSelectedProduct}
        setModalOpen={setModalOpen}
      ></List>
      {modalOpen ? (
        <Modal
          handleClose={() => setModalOpen(false)}
          product={selectedProduct}
        ></Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;
