import { Form, Input, Button, Checkbox, Typography, Space } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
  LockOutlined,
  MailOutlined,
  BackwardOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import { postRegister } from "../../services/apiServices";
import { toast } from "react-toastify";
const Register = () => {
  const [edit, setEdit] = useState({ email: "", username: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const { Text, Link } = Typography;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdit({
      ...edit,
      [name]: value,
    });
  };

  const onRegister = async () => {
    const res = await postRegister(edit.email, edit.password, edit.username);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      navigate("/login");
    } else {
      toast.error(res.EM);
    }
  };
  const clickBackHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="div_Res">
        <div className="row">
          <div
            className="Title col-12"
            style={{ marginTop: 10, textAlign: "right", paddingRight: "50px" }}
          >
            Don't have an account yet?{" "}
            <Button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Button>{" "}
            Need help?
          </div>
          <div className="col-4 offset-4 mt-5">
            <Form
              name="normal_registration"
              className="registration-form"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
            >
              <div className="login-form-border ">
                <Form.Item
                  name="email"
                  label="Email:"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item name="user" label="User name:">
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="User"
                    name="username"
                    onChange={handleChange}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password:"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters long!",
                    },
                  ]}
                >
                  <Input
                    onChange={handleChange}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    suffix={
                      passwordVisible ? (
                        <EyeInvisibleOutlined
                          style={{ cursor: "pointer" }}
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <EyeOutlined
                          style={{ cursor: "pointer" }}
                          onClick={togglePasswordVisibility}
                        />
                      )
                    }
                    autoFocus={passwordVisible ? false : true}
                  />
                </Form.Item>
                <Form.Item>
                  <Checkbox>Agree to the terms </Checkbox>
                </Form.Item>
                <Form.Item labelCol={{ span: 12 }}>
                  <Button
                    onClick={onRegister}
                    type="primary"
                    htmlType="submit"
                    className="register-form-button w-100"
                  >
                    Create my free account
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
      </div>
    </>
  );
};
export default Register;
