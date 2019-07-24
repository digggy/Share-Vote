import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createPoll } from "../store/action";

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      options: [""]
    };
    this.handleChange = this.handleChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAnswer(e, index) {
    const options = [...this.state.options];
    options[index] = e.target.value;
    this.setState({ options });
  }

  addAnswer() {
    this.setState({ options: [...this.state.options, ""] });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPoll(this.state);
  }

  render() {
    const options = this.state.options.map((option, index) => (
      <Fragment key={index}>
        <label>Option</label>
        <input
          className="field"
          type="text"
          value={option}
          onChange={e => this.handleAnswer(e, index)}
        />
      </Fragment>
    ));

    return (
      // Add a className
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="question">Question</label>
        <input
          className="field"
          type="text"
          name="question"
          value={this.state.question}
          onChange={this.handleChange}
        />

        {options}

        <button type="button" className="btn" onClick={this.addAnswer}>
          Add Option
        </button>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  { createPoll }
)(CreatePoll);
