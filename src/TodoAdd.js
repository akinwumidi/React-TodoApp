import React from 'react'
import "./TodoAdd.css"
import './RepeatedStyles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

const TodoAdd = (props) => {
    return (
        <form className='TodoAdd__container' onSubmit={props.add}>
            <input
                type='text'
                name='text'
                value={props.controlledValue}
                onChange={props.change}
            />
            <button type="submit" className='btn'>
                <FontAwesomeIcon icon={faFileArrowDown} />
            </button>
        </form>
    )
}


export default TodoAdd