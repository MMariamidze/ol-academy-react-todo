import React, { Component } from "react";
import "./Form.css";

class EditorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: props.value };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handelUpdateTodoItem(this.state.inputValue);
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
            value={this.state.inputValue}
          />
          <button className="btn btn-outline-warning" type="submit">
            update
          </button>
        </form>
      </div>
    );
  }
}

export default EditorForm;
