import React, { useState } from "react";
import "antd/dist/antd.css";
import { List, Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import "./contacts.css";
import { Link, useHistory } from "react-router-dom";
import { deleteContact } from "../../redux/actions";

function Contacts() {
  const contacts = useSelector((state) => state.contactList);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState();

  const allContacts = name
    ? contacts.filter((contact) => {
        if (contact.name.toLowerCase().startsWith(name.toLowerCase())) {
          return contact;
        } else return undefined;
      })
    : contacts;

  function edit(id) {
    let current = contacts.find((contact) => contact.id === id);
    history.push(`/edit/${current.id}`);
  }
  function delContact(phone) {
    const modal = Modal.success({
      title: "Success",
      footer: null,
    });
    dispatch(deleteContact(phone));
    setTimeout(() => {
      modal.destroy();
    }, 500);
  }

  return (
    <>
      <div className="contactContainer">
        <h2>Your contacts, {user.username}:</h2>
        <Link to="/add">
          <Button>+Add a new phone number</Button>
        </Link>
        <br />
        <input
          className="searchInput"
          placeholder="Search"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <List
          itemLayout="horizontal"
          dataSource={allContacts}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<UserOutlined />}
                title={<p>{item.name}</p>}
                description={<p>{item.phone}</p>}
              />
              <Button
                onClick={() => {
                  edit(item.id);
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  delContact(item.phone);
                }}
              >
                Delete
              </Button>
            </List.Item>
          )}
        />
      </div>
    </>
  );
}

export default Contacts;
