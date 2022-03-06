import React from 'react';
import "./TodoApp.css"
import TodoItem from "./TodoItem";

function TodoApp() {
    return (
        <div className="TodoItemHolder">
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div>
    )
}
export default TodoApp;