import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getPolls, getUserPolls } from "../store/action/";
class Polls extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
  }

  render() {
    const polls = this.props.polls.map(poll => <li>{poll.question}</li>);
    return (
      <Fragment>
        <ul>{polls}</ul>
      </Fragment>
    );
  }
}

/*
function mapStateToProps(state) {
  return {
    auth: state.auth,
    filter: state.filter
  };
}
*/

export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls
  }),
  { getPolls, getUser }
)(Polls);
