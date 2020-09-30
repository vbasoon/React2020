import React from "react";
import "./App.css";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="wrapper">
      <h1>React App</h1>
      <TodoList />
    </div>
  );
}

export default App;
