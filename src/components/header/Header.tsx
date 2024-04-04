import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/order"}>Order page</Link>
      <Link to={"/"}>Home</Link>
    </header>
  );
};

export default Header;