import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import "./Todoitem.css"

function TodoItem(props) {
    const completedTodo = {
        borderRight: "5px solid #5cb85c",

    }
    const unompletedTodo = {
        borderLeft: "5px solid #d9534f",


    }

    return (
        <div
            className="TodoItems"
            style={props.completed === true ? completedTodo : unompletedTodo}

        >
            <p>{props.todoText}</p>

            <div className='TodoItems__iconsHolder'>
                <FontAwesomeIcon
                    className="TodoItems__icons-icon"
                    icon={faTrashArrowUp}
                    onClick={() => props.delete(props.id)}
                    id={props.id}
                />

                <FontAwesomeIcon
                    className="TodoItems__icons-icon"
                    icon={faCircleCheck}
                    onClick={() => props.done(props.id)}
                    id={props.id}
                />

                <FontAwesomeIcon
                    className="TodoItems__icons-icon"
                    icon={faPenToSquare}
                    onClick={() => props.edit(props.id)}
                    id={props.id}
                />

            </div>
        </div >
    )

}
export default TodoItem;