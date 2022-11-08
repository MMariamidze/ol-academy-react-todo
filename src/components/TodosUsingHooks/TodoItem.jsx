import React from "react";
import MoveTasks from "./MoveTasks";
import "./button.css";
import "./todoapp.css";

const TodoItem = ({
  id,
  title,
  handleMarkedTodoItem,
  handelDeleteTodoItem,
  handelEditTodoItem,
  isDone,
  todos,
  setTodos,
}) => {
  return (
    <div className="custom-div">
      <li className="custom-li">
        <input
          className="btn"
          type="checkbox"
          onChange={() => handleMarkedTodoItem(id, "isChecked")}
        />
        <div>
          {console.log(isDone)}
          {isDone && <h1 style={{ color: "lime" }}>{title}</h1>}
          {!isDone && <h1 style={{ color: "tomato" }}>{title}</h1>}
        </div>

        <button
          className="btn btn-outline-danger"
          onClick={() => handelDeleteTodoItem(id)}
        >
          delete
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={() => handelEditTodoItem(id)}
        >
          Edit
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => handleMarkedTodoItem(id, "isDone")}
        >
          Done
        </button>
        <MoveTasks id={id} todos={todos} setTodos={setTodos} />
      </li>
    </div>
  );
};

export default TodoItem;
