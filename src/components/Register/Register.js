import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addUser, logIn } from "../../redux/actions";
import axios from "axios";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  async function onFinish(user) {
    await axios.post("/profile", { user });
    const data = await axios.get("/contactList");
    dispatch(addUser(user));
    dispatch(logIn(data.data));
    history.push("/");
  }

  return (
    <>
      <Form {...layout} name="registrationForm" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
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
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Register;
