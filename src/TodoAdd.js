import React, { Component } from 'react'
import "./TodoAdd.css"
import './RepeatedStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

class TodoAdd extends Component {
    constructor() {
        super()
        this.state = {
            NewTodoItem: ''
        }
    }
    render() {
        const onChangeHandler = (e) => {
            const { name, value } = e.target
            this.setState({ [name]: value })

        }
        return (
            <div className='TodoAdd__container' >
                <input
                    type='text'
                    name='NewTodoItem'
                    value={this.state.NewTodoItem}
                    onChange={onChangeHandler}
                />
                <button className='btn' onClick={this.props.Add}>
                    <FontAwesomeIcon icon={faFileArrowDown} />
                </button>
            </div>
        )
    }
}

export default TodoAdd