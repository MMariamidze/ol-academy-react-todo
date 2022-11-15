import React from "react";
import "./button.css";

const MoveTasks = ({ id, todos, setTodos }) => {
  const onMoveHandler = (isUp) => {
    const currentElement = todos.find((item) => item.id === id);
    let indexOfCurrentElement = todos.indexOf(currentElement);
    let indexOfMovedElement = isUp
      ? indexOfCurrentElement - 1
      : indexOfCurrentElement + 1;
    if (indexOfMovedElement === -1) {
      return;
    }
    const newArray = todos.filter((item) => {
      return todos.indexOf(item) !== indexOfCurrentElement;
    });
    newArray.splice(indexOfMovedElement, 0, currentElement);
    setTodos(newArray);
  };

  return (
    <div>
      <button
        className="btn btn-outline-warning"
        onClick={() => onMoveHandler(true)}
      >
        up
      </button>
      <button
        className="btn btn-outline-warning"
        onClick={() => onMoveHandler(false)}
      >
        down
      </button>
    </div>
  );
};

export default MoveTasks;
