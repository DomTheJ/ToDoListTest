import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'underline', color: todo.completed ? 'green' : 'red'}} onClick={toggleTodo}>{todo.text}</span> 
      <button id='deleteButton' onClick={deleteTodo}>Usuń</button>
    </li>
  );
};

export default TodoItem;