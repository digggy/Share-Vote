import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser, logout } from "../store/action";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    const { username, password } = this.state;
    const { authType } = this.props;
    e.preventDefault();
    this.props.authUser(authType || "login", { username, password });
  }

  render() {
    const { username, password } = this.state;

    return (
      // className auth
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={username}
              autoComplete="off"
              name="username"
              className="field"
              onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              autoComplete="off"
              name="password"
              className="field"
              onChange={this.handleChange}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { authUser, logout }
)(Auth);
