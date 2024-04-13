import { MenuItem } from "../../Types";

type MenuPropsType = {
  menu: MenuItem[];
  onSelect: React.Dispatch<React.SetStateAction<MenuItem>>;
};
const Menu = ({ menu, onSelect }: MenuPropsType) => {
  return (
    <div className="menu">
      <ul>
        {menu.map((m) => (
          <li key={m.name} onClick={() => onSelect(m)}>
            <h2>{m.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
