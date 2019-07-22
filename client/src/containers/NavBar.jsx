import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/action";
const NavBar = ({ auth, logout }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
      </ul>
      {auth.isAuthenticated && <p>Logged in as {auth.user.username}</p>}
    </div>
  );
};

export default connect(
  store => ({ auth: store.auth }),
  { logout }
)(NavBar);
