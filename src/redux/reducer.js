import {
  ADDCONTACT,
  ADDUSER,
  DELETECONTACT,
  EDITCONTACT,
  LOGIN,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  auth: false,
  user: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        auth: true,
        contactList: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        auth: false,
      };
    case ADDUSER:
      return {
        ...state,
        user: action.payload,
      };
    case ADDCONTACT:
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: action.payload.username,
            phone: String("+7" + action.payload.phone),
            id: Math.ceil(Math.random() * 1000),
          },
        ],
      };
    case EDITCONTACT:
      return {
        ...state,
        contactList: [
          ...(state.contactList = state.contactList.map((contact) => {
            if (contact.id === action.payload.id) {
              contact.name = action.payload.name;
              contact.phone = action.payload.phone;
              return contact;
            } else return contact;
          })),
        ],
      };
    case DELETECONTACT:
      return {
        ...state,
        contactList: [
          ...state.contactList.filter(
            (contact) => contact.phone !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
}
export default reducer;
