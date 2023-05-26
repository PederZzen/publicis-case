import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">Users</Link>
      <Link to="/clients">Clients</Link>
      <Link to="/campaigns">Campains</Link>
    </>
  );
};

export default Header;
