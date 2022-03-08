import React from 'react';
import "./TodoApp.css"
import TodoItem from "./TodoItem";
import todosData from './todosData'

function TodoApp() {
    const TodoItems = todosData.map(item => <TodoItem key={item.id} item={item} />)
    return (
        <div className="TodoItemHolder">
            {TodoItems}
        </div>
    )
}
export default TodoApp;