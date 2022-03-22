import React from 'react'
import "./TodoAdd.css"
import './RepeatedStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const TodoAdd = (props) => {
    return (
        <div className='TodoAdd__container'>
            <input
                type='text'
                name='toaddInput'
                value={''}
                onChange={props.Add}
            />
            <button className='btn' onClick={props.Add}>
                <FontAwesomeIcon icon={faFileArrowDown} />
            </button>
        </div>
    )
}

export default TodoAdd