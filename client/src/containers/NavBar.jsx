import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/action";
const NavBar = ({ auth, logout }) => {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="navbar-container">
          <li>
            <Link to="/" className="navbar-brand">
              Home
            </Link>
          </li>
          <li>
            <Link to="/register" className="navbar-item">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-item">
              Login
            </Link>
          </li>
          <li>
            <Link to="/test" className="navbar-item">
              Test
            </Link>
          </li>
          <li>
            <a onClick={logout} className="navbar-item">
              Logout
            </a>
          </li>
        </ul>
        {auth.isAuthenticated && (
          <p className="navbar-user">Logged in as {auth.user.username}</p>
        )}
      </div>
    </div>
  );
};

export default connect(
  store => ({ auth: store.auth }),
  { logout }
)(NavBar);
