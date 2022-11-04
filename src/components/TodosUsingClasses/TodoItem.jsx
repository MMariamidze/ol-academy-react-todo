import React, { Component } from "react";
import "./button.css";
import "./todoapp.css";

class TodoItem extends Component {
  render() {
    return (
      <div className="custom-div">
        {" "}
        <li className="custom-li">
          <input
            className="btn"
            type="checkbox"
            onChange={() =>
              this.props.handleMarkedTodoItem(this.props.id, "isChecked")
            }
          />
          {this.props.title}
          <button
            className="btn btn-outline-danger"
            onClick={() => this.props.handelDeleteTodoItem(this.props.id)}
          >
            delete
          </button>
          <button
            className="btn btn-outline-warning"
            onClick={() => this.props.handelEditTodoItem(this.props.id)}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-success"
            onClick={(e) =>
              this.props.handleMarkedTodoItem(this.props.id, "isDone")
            }
          >
            Done
          </button>
        </li>
      </div>
    );
  }
}

export default TodoItem;
