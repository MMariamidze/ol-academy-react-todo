import "./App.css";
import TodoApp from "./components/TodosUsingClasses/TodoApp";
// import TodoAppFunc from "./components/TodosUsingHooks/TodoAppFunc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoApp />
        {/* <TodoAppFunc /> */}
      </header>
    </div>
  );
}

export default App;
