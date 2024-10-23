import React, { useState, useEffect } from 'react'; // Import React 
import TodoList from './components/TodoList'; // Import pliku TodoList z komponentów
import TodoForm from './components/TodoForm'; // Import pliku TodoForm z komponentów
import Filter from './components/Filter'; // Import pliku Filter z komponentów

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Dodawanie i walidacja
  const addTodo = (todo) => {
    if (todo) {
      var newList = [...todos, { text: todo, completed: false }];
      setTodos(newList);
      save(newList);
    }
    else {
      alert("Wpisz dane!")
    }
  };

  // Oznaczanie wykonanych zadań
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    save(newTodos);
  };

  // Usuwanie
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    save(newTodos);
  };

  // Filtrowanie
  const filteredTodos = () => {
    switch (filter) {
        case 'completed':
            return todos.filter(todo => todo.completed);
        case 'incomplete':
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }};

  // Przechowywanie
  const save = (array)=> {
    localStorage.setItem('todos', JSON.stringify(array));
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Interfejs
  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={filteredTodos()} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
  );
};

export default App;