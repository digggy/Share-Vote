import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getPolls, getUserPolls, getCurrentPoll } from "../store/action/";
class Polls extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
  }
  handleSelect(id) {
    const { history } = this.props;
    history.push(`/poll/${id}`);
  }
  render() {
    const { auth, getPolls, getUserPolls } = this.props;
    const polls = this.props.polls.map(poll => (
      <li onClick={() => this.handleSelect(poll._id)} key={poll._id}>
        {poll.question}
      </li>
    ));
    return (
      <Fragment>
        {auth.isAuthenticated && (
          <div>
            <button onClick={getPolls} className="btn">
              All Polls
            </button>
            <button onClick={getUserPolls} className="btn">
              My Polls
            </button>
          </div>
        )}
        <ul className="polls">{polls}</ul>
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
  { getPolls, getUserPolls, getCurrentPoll }
)(Polls);
