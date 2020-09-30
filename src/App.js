import React from "react";
import "./App.css";
import TodoList from "./components/Todo/TodoList";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купити продукти" },
    { id: 2, completed: true, title: "Відкрити рахунок" },
    { id: 3, completed: false, title: "Написати резюме" },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <h1>React App</h1>
      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
