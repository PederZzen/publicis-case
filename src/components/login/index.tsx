import { Form } from "antd";
import Input from "antd/es/input/Input";
import React from "react";

const Login = () => {
  return (
    <Form>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
    </Form>
  );
};

export default Login;
