import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <h1 className="header">Welcome to NC News</h1>;
    </Link>
  );
};

export default Header;
