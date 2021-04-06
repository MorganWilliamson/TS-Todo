import React from "react";
import { ListItem } from "./ListItem";

interface Props {
    todos: Todo[];
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <ListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
};