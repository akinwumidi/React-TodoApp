import React, { useState } from 'react'
import "./TodoApp.css"
import TodoItem from "./TodoItem";
import todosData from './todosData'
import TodoAdd from "./TodoAdd";
import { TodoClear } from './TodoClear'


const TodoApp = () => {
    const [newInput, setnewInput] = useState('')
    const [todoList, setTodoList] = useState(todosData);


    const onChangeHandler = (e) => {
        const { value } = e.target
        setnewInput(value)
    }

    const ToaddHandler = (e) => {
        e.preventDefault()
        if (newInput) {
            const newTodoItem = { id: new Date().getTime().toString(), text: newInput, completed: false }
            setTodoList((oldTodos) => {
                return [newTodoItem, ...oldTodos]
            })
            setnewInput('')
        }
    }

    const deleteHandler = (id) => {
        const Newtodos = todoList.filter(todo => todo.id !== id)
        setTodoList(Newtodos)
    }

    const doneHandler = (id) => {
        const Newtodos = todoList.map((prevTodos) => {
            if ((prevTodos.id === id && prevTodos.completed === false) || (prevTodos.id === id && prevTodos.completed === true)) {
                prevTodos.completed = !prevTodos.completed
            }
            return prevTodos
        })
        setTodoList(Newtodos)
    }

    const editHandler = (id) => { }

    const clearHandler = () => {
        setTodoList([])
    }

    const undoHandler = () => {
    }

    const TodoItems = todoList.map((Eachtodo) => {
        const { id, text, completed } = Eachtodo
        return (
            <TodoItem
                key={id}
                id={id}
                todoText={text}
                completed={completed}
                delete={deleteHandler}
                done={doneHandler}
                edit={editHandler}
            />)
    })

    return (
        <div className="TodoItemHolder">
            <TodoAdd
                add={ToaddHandler}
                change={onChangeHandler}
                controlledValue={newInput}
            />
            {TodoItems}
            <TodoClear
                clear={clearHandler}
                undo={undoHandler}
            />
        </div>
    )
}

export default TodoApp