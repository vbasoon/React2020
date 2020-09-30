import React from "react";
import "./App.css";
import TodoList from "./components/Todo/TodoList";
import Context from "./context";
import AddTodo from "./components/Todo/AddTodo";

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

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          complete: false,
        },
      ])
    );
  };

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React App</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No Todo!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
