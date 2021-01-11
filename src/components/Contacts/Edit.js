import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editContact } from "../../redux/actions";

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

export default function Edit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { paramsId } = useParams();
  const contactList = useSelector((state) => state.contactList);
  let current = contactList.find((contact) => contact.id === Number(paramsId));

  async function onFinish(editedContact) {
    const modal = Modal.success({
      title: "Success",
      footer: null,
    });
    dispatch(editContact(editedContact, current.id));
    setTimeout(() => {
      modal.destroy();
      history.push("/contactList");
    }, 500);
  }

  return (
    <>
      <Form
        {...layout}
        name="newPhoneNumberForm"
        initialValues={current}
        onFinish={onFinish}
      >
        <Form.Item label="Name" name="name">
          <Input
            type="text"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number">
          <Input
            type="tel"
            maxLength="12"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Edit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
