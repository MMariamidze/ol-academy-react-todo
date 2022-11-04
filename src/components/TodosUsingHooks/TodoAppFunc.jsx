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

  const addNewTodo = (text) => {
    setTodos((prevState) => {
      return [
        ...prevState,
        { id: Math.random(), title: text, isDone: false, isChecked: false },
      ];
    });
  };

  const handelDeleteTodoItem = (todoid) => {
    setTodos({ items: todos.filter((id) => id !== todoid) });
  };

  const handelEditTodoItem = (id) => {
    setcurrentTodo(id);
    setshowEditor(true);
  };

  const handelUpdateTodoItem = (text) => {
    const updatedtodo = {
      id: setcurrentTodo,
      title: text,
      isDone: setcurrentTodo.isDone,
      isChecked: false,
    };

    setTodos({
      items: this.state.items.map((todo) => {
        if (todo.id === updatedtodo.id) {
          return updatedtodo;
        }
        return todo;
      }),
      showEditor: false,
    });
  };

  const handleMarkedTodoItem = (id, param) => {
    const newItems = this.state.items.map((item) => {
      if (item.id === id) {
        if (param === "isChecked") {
          item.isChecked = !item.isChecked;
        }
        if (param === "isDone") {
          item.isDone = !item.isDone;
        }
      }
      return item;
    });
    this.setState({ items: newItems });
  };

  const handelDeleteAll = () => {
    this.setState({ items: [] });
  };

  const handelDeleteDone = () => {
    this.setState({
      items: this.state.items.filter((item) => item.isDone !== true),
    });
  };
  const handelDeleteChecked = () => {
    this.setState({
      items: this.state.items.filter((item) => item.isChecked !== true),
    });
  };

  return (
    <div className="card custom-card">
      <div className="card-body custom- body">
        <h1 className="card-title custom-title"> To Do List</h1>

        <Form liftTextUp={this.addNewTodo} />
        {this.state.showEditor && (
          <EditorForm
            handelUpdateTodoItem={this.handelUpdateTodoItem}
            value={this.state.currentTodo.title}
          />
        )}
        <ul className="custom-ul">
          {this.state.items.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              handelDeleteTodoItem={this.handelDeleteTodoItem}
              handelEditTodoItem={this.handelEditTodoItem}
              handleMarkedTodoItem={this.handleMarkedTodoItem}
              checked={item.isDone}
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
