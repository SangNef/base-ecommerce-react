import React, { useEffect } from "react";
import { Form, Input, Button, Typography } from "antd";
import draw from "~/assets/draw.png";
import { useAuthContext } from "~/contexts/AuthContext";
import { getProfile, login } from "~/api/auth";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const AdminLogin = () => {
  const { authState, dispatch } = useAuthContext();
  const { error, loading } = authState;

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Ecommerce - Admin Login";
  }, []);

  const onFinish = async (values) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const response = await login({ email: values.email, password: values.password });
      const token = response.metadata.accessToken;
      localStorage.setItem("accessToken", token);
      dispatch({ type: "LOGIN_SUCCESS", payload: { token } });
      const profileResponse = await getProfile();
      console.log(profileResponse.metadata);
      dispatch({ type: "SET_USER", payload: { user: profileResponse.metadata } });
      console.log("After Dispatch:", authState); 
      navigate("/admin/products");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: { error: err?.response?.data?.message } });
    }
  };

  return (
    <div className="w-full h-screen flex justify-between items-center bg-gray-100">
      <div className="w-1/2 flex justify-center">
        <img src={draw} alt="Draw" className="w-3/4 h-auto" />
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <Title level={2}>Admin Login</Title>
        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          className="w-2/3 bg-white p-8 shadow-md rounded-md"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Form.Item>
            <Button size="large" type="primary" htmlType="submit" block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
