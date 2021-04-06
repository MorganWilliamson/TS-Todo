import React, { useState } from 'react';
import { ListItem
} from "./components/ListItem";
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

  return (
    <ul>
      <ListItem todo={todos[0]} toggleTodo={toggleTodo}  />
      <ListItem todo={todos[1]} toggleTodo={toggleTodo}  />
    </ul>
  )
}

export default App
