import { Link } from "react-router-dom";
import { Wrapper } from "./style";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Link to="/">Campains</Link>
        <Link to="/users">Users</Link>
        <Link to="/clients">Clients</Link>
      </div>
    </Wrapper>
  );
};

export default Header;
