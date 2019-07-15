import React from "react";
import api from "../services/api";

// const App = () => <div>App works</div>;

class App extends React.Component {
  async componentDidMount() {
    const result = await api.call("post", "auth/login", {
      username: "username",
      password: "password"
    });
    console.log(result);
  }

  render() {
    return <div>This works</div>;
  }
}

export default App;
