import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import logo from "../../assets/2024-04-14 11_34_40.png";

const Header = () => {
  const { state } = useContext(CartContext);
  const [count, setCount] = useState(state.length);

  useEffect(() => {
    setCount(state.length);
  }, [state]);

  return (
    <header>
      <Link to={"/"}>
        <img src={logo} />
      </Link>
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <h1>PIZZA CALCULATOR</h1>
      </Link>
      <Badge badgeContent={count} invisible={count < 1}>
        <Link to={"/order"}>
          <ShoppingCartIcon
            fontSize="large"
            style={{ textDecoration: "none", color: "black" }}
          />
        </Link>
      </Badge>
    </header>
  );
};

export default Header;
