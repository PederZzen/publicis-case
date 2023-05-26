import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import { Modal } from "antd";
import Login from "../../login";
import { useState } from "react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <div>
        <p onClick={showModal}>Login</p>
        <Link to="/">Campains</Link>
        <Link to="/users">Users</Link>
        <Link to="/clients">Clients</Link>
      </div>
      <Modal
        title="Login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Login />
      </Modal>
    </Wrapper>
  );
};

export default Header;
