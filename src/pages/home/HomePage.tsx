import { useContext, useState } from "react";
import { MenuContext } from "../../context/MenuContextProvider";
import List from "../../components/list/List";
import { Product } from "../../Types";
import Modal from "../../components/modal/Modal";
import { useToggleModal } from "../../hooks/useToggleModal";
import Container from "../../components/container/Container";

const HomePage = () => {
  const { state } = useContext(MenuContext);
  const [selectedMenu, setSelectedMenu] = useState("Pizza");
  const [selectedProduct, setSelectedProduct] = useState({} as Product);
  const { open, setModalOpen, setModalClosed } = useToggleModal();

  function extractUniqueTypes(products: Product[]): string[] {
    const typesSet = new Set<string>();
    products.forEach((product) => {
      typesSet.add(product.type);
    });
    return Array.from(typesSet);
  }

  const uniqueTypes = extractUniqueTypes(state);

  return (
    <div className="home-container">
      <div className="menu">
        <ul>
          {uniqueTypes.map((t) => (
            <li
              key={t}
              onClick={() => setSelectedMenu(t)}
              className={selectedMenu === t ? "active" : ""}
            >
              <h2>{t}</h2>
            </li>
          ))}
        </ul>
      </div>
      <Container>
        <List
          products={state.filter((p) => p.type === selectedMenu)}
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
