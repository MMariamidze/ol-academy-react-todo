import React, { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import EditorForm from "./EditoForm";
import "./todoapp.css";
import "./button.css";

const data = [
  { id: 1, title: "task1", isDone: false, isChecked: false },
  { id: 2, title: "task2", isDone: false, isChecked: false },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(data);
  const [currentTodo, setcurrentTodo] = useState(null);
  const [showEditor, setshowEditor] = useState(false);
  const [showError, setShowError] = useState("");

  const addNewTodo = (text) => {
    const itemExists = todos.find(
      ({ title }) =>
        title.trim().toLocaleLowerCase() === text.trim().toLocaleLowerCase()
    );

    if (!itemExists) {
      setTodos((prevState) => [
        ...prevState,
        {
          id: Math.round(Math.random() * 100),
          title: text.trim(),
          isDone: false,
          isChecked: false,
        },
      ]);
      setShowError("");
    } else setShowError(new Error("Same task already exists"));
  };

  const handelDeleteTodoItem = (todoid) => {
    setTodos(todos.filter(({ id }) => id !== todoid));
  };

  const handelEditTodoItem = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        setcurrentTodo(todo);
      }
    });
    setshowEditor(true);
  };

  const handelUpdateTodoItem = (text) => {
    todos.forEach((todo) => {
      if (todo.id === currentTodo.id) {
        todo.title = text;
      }
    });
    setTodos(todos);
    setshowEditor(false);
  };

  const handleMarkedTodoItem = (todoid, param) => {
    todos.forEach((todo) => {
      if (todo.id === todoid) {
        if (param === "isChecked") {
          todo.isChecked = !todo.isChecked;
        }
        if (param === "isDone") {
          todo.isDone = !todo.isDone;
        }
      }
    });

    setTodos((prevState) => [...prevState]);
  };

  const handelDeleteAll = () => {
    setTodos([]);
  };

  const handelDeleteDone = () => {
    setTodos(todos.filter(({ isDone }) => !isDone));
  };
  const handelDeleteChecked = () => {
    setTodos(todos.filter(({ isChecked }) => !isChecked));
  };

  return (
    <div className="card custom-card">
      <div className="card-body custom- body">
        <h1 className="card-title custom-title"> To Do List</h1>
        <Form liftTextUp={addNewTodo} showError={showError} />
        {showEditor && (
          <EditorForm
            handelUpdateTodoItem={handelUpdateTodoItem}
            value={currentTodo}
          />
        )}
        <ul className="custom-ul">
          {todos.map(({ id, title, isDone }) => (
            <TodoItem
              key={id}
              id={id}
              title={title}
              handelDeleteTodoItem={handelDeleteTodoItem}
              handelEditTodoItem={handelEditTodoItem}
              handleMarkedTodoItem={handleMarkedTodoItem}
              isDone={isDone}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
        <div>
          <button className="btn btn-outline-danger" onClick={handelDeleteAll}>
            Delete All
          </button>
          <button className="btn btn-outline-danger" onClick={handelDeleteDone}>
            Delete Done
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={handelDeleteChecked}
          >
            Delete Checked
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
