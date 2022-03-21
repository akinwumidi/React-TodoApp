import React from 'react'
import "./TodoClear.css"
import "./RepeatedStyles.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faExplosion } from "@fortawesome/free-solid-svg-icons";
export const TodoClear = () => {
    return (
        <div className='TodoClear__container'>
            <button className='btn btn__del'>
                Clear All
                {/* <FontAwesomeIcon icon={faExplosion} /> */}
            </button>
            <button className='btn btn__del-iconHolder'>
                <FontAwesomeIcon className='icon' icon={faRotate} />
                Undo
            </button>
        </div>
    )
}
