import React, { useEffect, useState } from "react";
import {
  LockOutlined,
  UserOutlined,
  BackwardOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Space, Typography } from "antd";

import "./Login.scss";

import { postLogin } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { Text, Link } = Typography;
  const [edit, setEdit] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEdit({
      ...edit,
      [name]: value,
    });
  };

  //   useEffect(() => {
  //     console.log(edit);
  //   }, [edit]);
  const navigate = useNavigate();
  const clickBackHome = () => {
    navigate("/");
  };
  const onFinish = (values) => {
    //   console.log("Received values of form: ", values);
  };
  const onLogin = async () => {
    const res = await postLogin(edit.email, edit.password);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      navigate("/");
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <div className="row div_Login">
      <div className="Title col-12">
        Don't have an account yet? <Button>Sign up</Button> Need help?
      </div>
      <div className="div_form col-4 offset-4 mt-5">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
        >
          <div className="login-form-border">
            <Form.Item
              label="Email:"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
            >
              <Input
                style={{ height: 40 }}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={handleChange}
                name="email"
              />
            </Form.Item>
            <Form.Item
              label="Password:"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                style={{ height: 40 }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="">
                Forgot password?
              </Link>
            </Form.Item>

            <Form.Item labelCol={{ span: 12 }}>
              <Button
                onClick={onLogin}
                type="primary"
                htmlType="submit"
                className="login-form-button w-100"
              >
                Log in
              </Button>
            </Form.Item>

            <Space
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={clickBackHome}
            >
              <BackwardOutlined /> <Text>Go to home</Text>
            </Space>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;
