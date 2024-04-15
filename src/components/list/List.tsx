import { Product } from "../../Types";

type ListPropsType = {
  products: Product[];
  setSelected: React.Dispatch<React.SetStateAction<Product>>;
  setModalOpen: () => void;
};

const List = ({ products, setSelected, setModalOpen }: ListPropsType) => {
  return (
    <ul className="list">
      {products.map((p) => (
        <li className="list-item" key={p.product.id}>
          <div>
            <h3>{p.product.name}</h3>
            {p.type === "Pizza" || p.type === "Burger" || p.type === "Salad" ? (
              <p>{p.product.ingredients.join(", ")}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="row">
            <p>${p.product.price}</p>
            <button
              onClick={() => {
                setSelected(p);
                setModalOpen();
              }}
            >
              Add to cart
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
