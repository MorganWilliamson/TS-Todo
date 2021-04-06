import React, { useState } from 'react';
import { TodoList } from "./components/TodoList";
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
  }

  return <TodoList todos={todos} toggleTodo={toggleTodo} />
}

export default App;
