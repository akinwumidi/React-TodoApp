import React, { useState } from 'react'
import "./TodoApp.css"
import TodoItem from "./TodoItem";
import todosData from './todosData'
import TodoAdd from "./TodoAdd";
import { TodoClear } from './TodoClear'


const TodoApp = () => {
    const [newInput, setnewInput] = useState('');
    const [todoList, setTodoList] = useState(todosData);
    const [EditInUse, setEditInUse] = useState(false)
    const [todoEditID, setTodoEditID] = useState(0)
    const [prevTodoList, setPrevTodoList] = useState([])

    const onChangeHandler = (e) => {
        const { value } = e.target
        setnewInput(value)
    }

    const ToaddHandler = (e) => {
        e.preventDefault()
        setPrevTodoList(todoList)
        if (newInput) {
            const newTodoItem = {
                text: newInput,
                completed: false,
                id: parseInt(new Date().getTime().toString())
            }
            setTodoList((oldTodos) => {
                return [newTodoItem, ...oldTodos]
            })
            setnewInput('')
        }
        if (newInput && EditInUse) {
            const TodoTextUpdater = todoList.map((todos) => {
                if (todos.id === todoEditID) {
                    return { ...todos, text: newInput }
                }
                return todos
            })
            setTodoList(TodoTextUpdater)
        }
    }

    const deleteHandler = (id) => {
        setPrevTodoList(todoList)
        const Newtodos = todoList.filter(todo => todo.id !== id)
        setTodoList(Newtodos)
    }

    const doneHandler = (id) => {
        setPrevTodoList(todoList)
        const Newtodos = todoList.map((prevTodos) => {
            if ((prevTodos.id === id && prevTodos.completed === false) ||
                (prevTodos.id === id && prevTodos.completed === true)) {
                prevTodos.completed = !prevTodos.completed
            }
            return prevTodos
        })
        setTodoList(Newtodos)
    }

    const editHandler = (id) => {
        setPrevTodoList(todoList)
        const SpecificTodoItem = todoList.find((todo) => todo.id === id)
        setnewInput(SpecificTodoItem.text)
        setEditInUse(true)
        setTodoEditID(id)
    }

    const clearHandler = () => {
        setPrevTodoList(todoList)
        setTodoList([])
    }

    const undoHandler = () => {
        setTodoList(prevTodoList)
    }

    const TodoItems = todoList.map((EachtodoInList) => {
        const { id, text, completed } = EachtodoInList
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