import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import decode from "jwt-decode";

// import api from "../services/api";
import { store } from "../store/index";
import { setToken, setCurrentUser } from "../store/action/auth";
import { addError } from "../store/action/error";
//import Auth from "../components/Auth";
//import ErrorMessage from "../components/ErrorMessage";
import RouterViews from "./RouterViews";
import NavBar from "./NavBar";

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
    <Router>
      <Fragment>
        <NavBar />
        <RouterViews />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
