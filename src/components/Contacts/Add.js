import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { addContact } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";

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

export default function Add() {
  const history = useHistory();
  const dispatch = useDispatch();

  async function onFinish(newContact) {
    dispatch(addContact(newContact));
    const modal = Modal.success({
      title: "Success",
      footer: null,
    });
    setTimeout(() => {
      history.push("/contactList");
      modal.destroy();
    }, 500);
  }

  return (
    <>
      <Form {...layout} name="newPhoneNumberForm" onFinish={onFinish}>
        <Form.Item
          label="Name"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input a name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            value="123"
            type="tel"
            placeholder="8888888888"
            maxLength="10"
            addonBefore="+7"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
