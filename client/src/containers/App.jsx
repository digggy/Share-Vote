import React from "react";
import { Provider } from "react-redux";
import decode from "jwt-decode";

// import api from "../services/api";
import { store } from "../store/index";
import { setToken, setCurrentUser } from "../store/action/auth";
import { addError } from "../store/action/error";
import Auth from "../components/Auth";
import ErrorMessage from "../components/ErrorMessage";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}
const App = () => (
  <Provider store={store}>
    <Auth authType={"login"} />
    <ErrorMessage />
  </Provider>
);

export default App;
