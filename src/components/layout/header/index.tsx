import { Link, useLocation } from "react-router-dom";
import { Wrapper } from "./style";
import { Modal } from "antd";
import Login from "../../login";
import { useEffect, useState } from "react";
import MenuIcon from "./menuIcon";
import useWindowWidth from "../../../hooks/useWindowWidth";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const user = localStorage.getItem("name");
  const { windowWidth } = useWindowWidth();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const logOutUser = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  const loggedIn = (
    <div>
      <p>{user}</p>
      <p onClick={logOutUser} className="logOut">
        Logout
      </p>
    </div>
  );

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <Wrapper>
      <div
        className="menu"
        style={{ transform: showMenu ? `translateX(0)` : "" }}
      >
        {windowWidth < 1200 ? (
          <div className="menuIcon">
            <MenuIcon
              style={{ transform: showMenu ? `rotate(180deg)` : "" }}
              onClick={toggleMenu}
            />
          </div>
        ) : (
          ""
        )}
        <div>
          <Link to="/">Campains</Link>
          <Link to="/users">Users</Link>
          <Link to="/clients">Clients</Link>
        </div>
        {user ? loggedIn : <p onClick={showModal}>Login</p>}
      </div>
      <Modal
        title="Login"
        open={isModalOpen}
        footer={false}
        onCancel={handleCancel}
      >
        <Login />
      </Modal>
    </Wrapper>
  );
};

export default Header;
