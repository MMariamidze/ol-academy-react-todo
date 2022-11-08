import "./Form.css";
import React, { useState } from "react";

const Form = ({ liftTextUp, showError }) => {
  const [input, setInput] = useState("");

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    liftTextUp(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="custom-label" htmlFor="new-todo">
          Tasks:{" "}
        </label>
        {showError && <h1>{showError.message}</h1>}
        <input
          className="custom-input"
          id="new-todo"
          onChange={handleChange}
          value={input}
        />
        <button className="btn btn-outline-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
