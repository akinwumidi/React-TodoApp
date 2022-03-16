import React, { Component } from 'react'
import "./TodoApp.css"
import TodoItem from "./TodoItem";
import todosData from './todosData'

class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    handleChange = (id) => {
        console.log('Changed', id)
    }
    render() {
        const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
        return (
            <div className="TodoItemHolder">
                {TodoItems}
            </div>
        )
    }
}
export default TodoApp;