import React from "react";

interface Todo {
    text: string;
    completed: boolean;
};

interface Props {
    todo: Todo;
};

export const ListItem: React.FC<Props> = ({ todo }) => {
    return (
        <li>
            <label style={{ textDecoration: todo.completed ? 'line-through' : undefined }}>
                <input type="checkbox" checked={todo.completed} /> {todo.text}
            </label>
        </li>
    )
};