import React, { useState, useEffect, useRef } from 'react'
import "./TodoApp.css"
import TodoItem from "./TodoItem";
import todosData from './todosData'
import TodoAdd from "./TodoAdd";
import { TodoClear } from './TodoClear'

const TodoApp = () => {
    const [todo, setTodo] = useState(todosData);
    const ToaddHandler = () => { }
    const deleteHandler = (id) => {
        const Newtodos = todo.filter(todo => todo.id != id)
        setTodo(Newtodos)
    }

    const doneHandler = (id) => {
        const Newtodos = todo.map((prevTodos) => {
            if ((prevTodos.id === id && prevTodos.completed === false) || (prevTodos.id === id && prevTodos.completed === true)) {
                prevTodos.completed = !prevTodos.completed
            }
            return prevTodos
        })
        setTodo(Newtodos)
    }

    const editHandler = (id) => { }
    const TodoItems = todo.map((Eachtodo) => {
        return (
            <TodoItem
                key={Eachtodo.id}
                id={Eachtodo.id}
                todoText={Eachtodo.text}
                completed={Eachtodo.completed}
                delete={deleteHandler}
                done={doneHandler}
                edit={editHandler}
            />)
    })
    const clearHandler = () => {
        setTodo([])
    }
    const prevTodos = useRef();
    useEffect(() => {
        prevTodos.current = todo
    }, [todo]);
    const undoHandler = () => {
        setTodo(prevTodos.current)
    }
    return (
        <div className="TodoItemHolder">
            <TodoAdd Add={ToaddHandler} />
            {TodoItems}
            <TodoClear clear={clearHandler} undo={undoHandler} />
        </div>
    )
}

export default TodoApp