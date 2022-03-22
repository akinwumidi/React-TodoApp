import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashArrowUp, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import "./Todoitem.css"
import stateStyles from "./stateStyles.module.css";

function TodoItem(props) {
    return (
        <div
            className="TodoItems"
        // className={stateStyles.completedTodo}
        // style={props.completed === true ? stateStyles.completedTodo : null}
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