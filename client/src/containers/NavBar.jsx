import React, { Fragment } from "react";
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
          {!auth.isAuthenticated && (
            <Fragment>
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
            </Fragment>
          )}

          {auth.isAuthenticated && (
            <Fragment>
              <li>
                <Link to="/poll/new" className="navbar-item">
                  Create Poll
                </Link>
              </li>
              <li>
                <a onClick={logout} className="navbar-item">
                  Logout
                </a>
              </li>
            </Fragment>
          )}
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
