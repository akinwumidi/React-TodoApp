import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import "./Todoitem.css"

function TodoItem(props) {
    let CompStyles = {
        color: "#cdcdcd",
        fontStyle: "italic",
        textDecoration: "line-through"
    }
    return (
        <div className="TodoItems">
            {/* <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? CompStyles : null}>{props.item.text} </p> */}
            <p>{props.item.text}</p>
            <div className='TodoItems__icons'>
                <FontAwesomeIcon className="icon" icon={faTrashArrowUp} />
                <FontAwesomeIcon className="icon" icon={faCircleCheck} />
                <FontAwesomeIcon className="icon" icon={faPenToSquare} />

            </div>
        </div>
    )

}
export default TodoItem;