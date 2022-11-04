import "./Form.css";
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.liftTextUp(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="custom-label" htmlFor="new-todo">
            Tasks:{" "}
          </label>
          <input
            className="custom-input"
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button className="btn btn-outline-success" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
