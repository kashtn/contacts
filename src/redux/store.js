import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const PreloadedState = window.localStorage.getItem("redux") || "{}";

const store = createStore(
  reducer,
  JSON.parse(PreloadedState),
  composeWithDevTools()
);

store.subscribe(() => {
  window.localStorage.setItem("redux", JSON.stringify(store.getState()));
});

export default store;
