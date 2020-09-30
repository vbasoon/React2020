import React from "react";
import "./App.css";
import TodoList from "./components/Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Купити продукти' },
    { id: 2, completed: false, title: 'Відкрити рахунок' },
    { id: 3, completed: false, title: 'Написати резюме' }
  ]
  return (
    <div className="wrapper">
      <h1>React App</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
