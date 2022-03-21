import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import "./Todoitem.css"

function TodoItem(props) {

    return (
        <div className="TodoItems">
            <p>{props.todoText}</p>
            <div className='TodoItems__iconsHolder'>
                <FontAwesomeIcon className="TodoItems__icons-icon" icon={faTrashArrowUp} />
                <FontAwesomeIcon className="TodoItems__icons-icon" icon={faCircleCheck} />
                <FontAwesomeIcon className="TodoItems__icons-icon" icon={faPenToSquare} />

            </div>
        </div>
    )

}
export default TodoItem;