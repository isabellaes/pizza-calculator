import { useContext, useState } from "react";
import { MenuContext } from "../../context/MenuContextProvider";
import Menu from "../../components/menu/Menu";
import List from "../../components/list/List";
import { Product } from "../../Types";
import Modal from "../../components/modal/Modal";
import { useToggleModal } from "../../hooks/useToggleModal";
import Container from "../../components/container/Container";

const HomePage = () => {
  const { state } = useContext(MenuContext);
  const [selectedMenu, setSelectedMenu] = useState(state[0]);
  const [selectedProduct, setSelectedProduct] = useState({} as Product);
  const { open, setModalOpen, setModalClosed } = useToggleModal();

  return (
    <div className="home-container">
      <Menu menu={state} onSelect={setSelectedMenu}></Menu>
      <Container>
        <List
          menu={selectedMenu}
          setSelected={setSelectedProduct}
          setModalOpen={setModalOpen}
        ></List>
      </Container>
      {open ? (
        <Modal
          handleClose={() => setModalClosed()}
          product={selectedProduct}
        ></Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;
