import React from "react";
import Polls from "../components/Polls";
import ErrorMessage from "../components/ErrorMessage";

const Homepage = props => (
  <div>
    <ErrorMessage />
    <Polls {...props} />
  </div>
);

export default Homepage;
