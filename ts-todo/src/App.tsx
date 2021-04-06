import React, { useState } from 'react';
import { ListItem } from "./components/ListItem";
import './App.css';

const todos: Todo[] = [
  {
    text: "Feed the dogs.",
    completed: false,
  },
]

function App() {
  return (
    <ul>
      <ListItem todo={todos[0]} />
    </ul>
  )
}

export default App
