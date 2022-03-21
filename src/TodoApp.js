import React, { Component } from 'react'
import "./TodoApp.css"
import TodoItem from "./TodoItem";
import todosData from './todosData'
import TodoAdd from "./TodoAdd";
import { TodoClear } from './TodoClear'

class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(id) {
        // console.log('Changed', id)

        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    // if (todo.completed === true) {

                    //     todo.completed = false
                    // } else {

                    //     todo.completed = true
                    // }
                    let CurentValue;
                    if (todo.completed === true) {
                        CurentValue = false
                    }
                    todo.completed = CurentValue
                }

                return todo
            })
            console.log(updatedTodos)
            return { todos: updatedTodos }

        })


    }

    render() {
        const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        return (
            <div className="TodoItemHolder" >
                <TodoAdd />
                {TodoItems}
                <TodoClear />
            </div>
        )
    }
}
export default TodoApp;