import React, { useState } from 'react';
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import './App.css';

const initialTodos: Todo[] = [
  {
    text: "Feed the dogs.",
    completed: false,
  },
  {
    text: "Wash the car.",
    completed: true,
  },
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selected: Todo) => {
    const newTodo = todos.map(todo => {
      if (todo === selected) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, completed: false};
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1 className="title">TypeScript To-Do List:</h1>
      <TodoList className="todoList" todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  )
}

export default App;
