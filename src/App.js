import React from "react";
import "./App.css";
import TodoList from "./components/Todo/TodoList";
import Context from "./context";

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

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React App</h1>
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
