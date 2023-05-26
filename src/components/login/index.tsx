import { Form, Input } from "antd";
import { ApiClient } from "../../api-client";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const onSubmit = (data: FormData) => {
    const loginUser = async () => {
      try {
        const apiClient = new ApiClient();
        const userData = await apiClient.login(data.email, data.password);

        if (userData) {
          localStorage.setItem("name", userData.name);
          localStorage.setItem("email", userData.email);
        }
      } catch (err) {
        console.error(err);
      }
      window.location.reload();
    };
    loginUser();
  };

  return (
    <Form onFinish={onSubmit}>
      <Form.Item name="email">
        <Input placeholder="Email" id="email" />
      </Form.Item>

      <Form.Item name="password">
        <Input.Password placeholder="Password" id="password" />
      </Form.Item>

      <Form.Item>
        <button className="button" type="submit">
          Login
        </button>
      </Form.Item>
    </Form>
  );
};

export default Login;
