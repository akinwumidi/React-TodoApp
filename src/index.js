import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

const Fruits = ["Apple", 'Mango', "time"]
const [yam, beans, bread] = Fruits
const BrokenF = Fruits.map(
  function (items) {
    return (
      <p>{items}</p>
    )
  }
)

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
    {/* {BrokenF} */}
    {/* {Fruits} */}
  </React.StrictMode>
  ,
  document.querySelector('#TodoApp')
)

