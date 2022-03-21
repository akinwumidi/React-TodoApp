import React from 'react'
import "./TodoClear.css"
import "./RepeatedStyles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
export const TodoClear = (props) => {
    return (
        <div className='TodoClear__container'>
            <button className='btn btn__del' onClick={props.clear}>
                Clear All
            </button>
            <button className='btn btn__del-iconHolder' onClick={props.undo}>
                <FontAwesomeIcon className='btn__del-icon' icon={faRotate} />
                Undo
            </button>
        </div>
    )
}
