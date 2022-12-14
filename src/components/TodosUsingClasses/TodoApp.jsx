import React from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";
import EditorForm from "./EditoForm";
import "./todoapp.css";
import "./button.css";

const data = [
  { id: 1, title: "task1", isDone: false, isChecked: false },
  { id: 2, title: "task2", isDone: false, isChecked: false },
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      currentTodo: {},
      showEditor: false,
      showError: false,
    };
  }

  addNewTodo = (text) => {
    const itemExists = this.state.items.find(
      ({ title }) =>
        title.trim().toLocaleLowerCase() === text.trim().toLocaleLowerCase()
    );
    if (!itemExists) {
      this.setState((prevState) => ({
        items: [
          ...prevState.items,
          {
            id: Math.random() * 100,
            title: text.trim(),
            isDone: false,
            isChecked: false,
          },
        ],
        showError: false,
      }));
    } else {
      this.setState({
        showError: true && alert("this todo already exists, enter another !"),
      });
    }
  };

  handelDeleteTodoItem = (id) => {
    this.setState({ items: this.state.items.filter((item) => item.id !== id) });
  };

  handelEditTodoItem = (id) => {
    this.setState({
      currentTodo: this.state.items.find((item) => item.id === id),
      showEditor: true,
    });
  };

  handelUpdateTodoItem = (text) => {
    const updatedtodo = {
      id: this.state.currentTodo.id,
      title: text,
      isDone: this.state.currentTodo.isDone,
      isChecked: false,
    };
    const itemExists = this.state.items.find(
      ({ title }) =>
        title.trim().toLocaleLowerCase() === text.trim().toLocaleLowerCase()
    );
    if (!itemExists) {
      this.setState({
        items: this.state.items.map((todo) => {
          if (todo.id === updatedtodo.id) {
            return updatedtodo;
          }
          return todo;
        }),
        showEditor: false,
        showError: false,
      });
    } else {
      this.setState({
        showError: true && alert("this todo already exists, enter another !"),
      });
    }
  };

  handleMarkedTodoItem = (id, param) => {
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

  handelDeleteAll = () => {
    this.setState({ items: [] });
  };

  handelDeleteDone = () => {
    this.setState({
      items: this.state.items.filter((item) => item.isDone !== true),
    });
  };
  handelDeleteChecked = () => {
    this.setState({
      items: this.state.items.filter((item) => item.isChecked !== true),
    });
  };
  handleUp = (todo) => {
    let myTodos = this.state.items;
    let currentTodoIndex = myTodos.indexOf(todo);
    if (currentTodoIndex !== 0) {
      let wantedTodoIndex = currentTodoIndex - 1;
      let tempRemovedTodo = myTodos.splice(
        wantedTodoIndex,
        1,
        myTodos[currentTodoIndex]
      );
      myTodos[currentTodoIndex] = tempRemovedTodo[0];
    }
    this.setState({ items: myTodos });
  };
  handleDown = (todo) => {
    let myTodos = this.state.items;
    let currentTodoIndex = myTodos.indexOf(todo);
    if (currentTodoIndex !== myTodos.length - 1) {
      let wantedTodoIndex = currentTodoIndex + 1;
      let tempRemovedTodo = myTodos.splice(
        wantedTodoIndex,
        1,
        myTodos[currentTodoIndex]
      );
      myTodos[currentTodoIndex] = tempRemovedTodo[0];
    }
    this.setState({ items: myTodos });
  };

  render() {
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
                handleUp={this.handleUp}
                handleDown={this.handleDown}
                isDone={item.isDone}
                item={item}
              />
            ))}
          </ul>
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={this.handelDeleteAll}
            >
              Delete All
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={this.handelDeleteDone}
            >
              Delete Done
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={this.handelDeleteChecked}
            >
              Delete Checked
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp;
