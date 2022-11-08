import React, { useState } from "react";
import "./Form.css";

const EditorForm = ({ handelUpdateTodoItem, value }) => {
  // console.log(value);
  const [input, setInput] = useState(value.title);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input, "input");
    if (!input) return;
    setInput("");
    handelUpdateTodoItem(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="custom-label" htmlFor="new-todo">
          Tasks:{" "}
        </label>
        <input
          className="custom-input"
          id="new-todo"
          onChange={handleChange}
          value={input}
        />
        <button className="btn btn-outline-warning" type="submit">
          update
        </button>
      </form>
    </div>
  );
};

export default EditorForm;
