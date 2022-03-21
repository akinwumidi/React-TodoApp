import React, { useState } from 'react'
import "./TodoApp.css"
import TodoItem from "./TodoItem";
import todosData from './todosData'
import TodoAdd from "./TodoAdd";
import { TodoClear } from './TodoClear'

const TodoApp = () => {
    const [todo, settodo] = useState(todosData);
    const TodoItems = todo.map((Eachtodo) => {
        return (<TodoItem key={Eachtodo.id} todoText={Eachtodo.text} />)
    })
    const clearHandler = () => {
        settodo([])
    }
    const undoHandler = () => {

    }
    return (
        <div className="TodoItemHolder">
            <TodoAdd />
            {TodoItems}
            <TodoClear clear={clearHandler} undo={undoHandler} />
        </div>
    )
}

export default TodoApp