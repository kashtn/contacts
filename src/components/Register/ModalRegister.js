import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import Register from "./Register";

export default function ModalRegister() {
  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Sign Up
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Register />
      </Modal>
    </>
  );
}
