import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import { connect } from "react-redux";
import TestPage from "../pages/TestPage";
import Homepage from "../pages/Homepage";
import { getCurrentPoll } from "../store/action";
import PollPage from "../pages/PollPage";
import CreatePollPage from "../pages/CreatePollPage";

const RouteViews = ({ auth, getCurrentPoll }) => (
  <main>
    <Switch>
      <Route exact path="/" render={props => <Homepage {...props} />} />
      <Route
        path="/login"
        render={() => (
          <AuthPage authType="login" isAuthenticated={auth.isAuthenticated} />
        )}
      />

      <Route
        path="/register"
        render={() => (
          <AuthPage
            authType="register"
            isAuthenticated={auth.isAuthenticated}
          />
        )}
      />

      <Route
        exact
        path="/poll/new"
        render={() => <CreatePollPage isAuthenticated={auth.isAuthenticated} />}
      />

      <Route
        exact
        path="/poll/:id"
        render={props => (
          <PollPage getPoll={id => getCurrentPoll(id)} {...props} />
        )}
      />
      <Route exact path="/test" render={() => <TestPage />} />
    </Switch>
  </main>
);

export default withRouter(
  connect(
    store => ({ auth: store.auth }),
    { getCurrentPoll }
  )(RouteViews)
);
