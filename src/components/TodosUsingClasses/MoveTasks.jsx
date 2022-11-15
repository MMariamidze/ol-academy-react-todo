import React, { Component } from "react";
import "./button.css";
class MoveTasks extends Component {
  onMoveHandler = (isUp) => {
    const { items, id, setTodos } = this.props;
    const currentElement = items.find((item) => item.id === id);
    let indexOfCurrentElement = items.indexOf(currentElement);
    let indexOfMovedElement = isUp
      ? indexOfCurrentElement - 1
      : indexOfCurrentElement + 1;
    if (indexOfMovedElement === -1) {
      return;
    } else {
      const newArray = items.filter((item) => {
        return items.indexOf(item) !== indexOfCurrentElement;
      });
      newArray.splice(indexOfMovedElement, 0, currentElement);
      setTodos(newArray);
    }
  };

  render() {
    return (
      <div className="up-down-buttons">
        <button
          className="btn btn-outline-warning"
          onClick={() => this.onMoveHandler(true)}
        >
          up
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={() => this.onMoveHandler(false)}
        >
          down
        </button>
      </div>
    );
  }
}

export default MoveTasks;
