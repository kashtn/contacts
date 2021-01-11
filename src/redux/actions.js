import {
  LOGIN,
  LOGOUT,
  ADDUSER,
  ADDCONTACT,
  EDITCONTACT,
  DELETECONTACT,
} from "./actionTypes";

export function logIn(data) {
  return {
    type: LOGIN,
    payload: data,
  };
}
export function logOut() {
  return {
    type: LOGOUT,
  };
}
export function addUser(data) {
  return {
    type: ADDUSER,
    payload: data,
  };
}
export function addContact({ username, phone }) {
  return {
    type: ADDCONTACT,
    payload: {
      username,
      phone,
    },
  };
}
export function editContact(current, id) {
  return {
    type: EDITCONTACT,
    payload: {
      name: current.name,
      phone: current.phone,
      id,
    },
  };
}
export function deleteContact(phone) {
  return {
    type: DELETECONTACT,
    payload: phone,
  };
}
