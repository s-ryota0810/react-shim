import { useState, useRef } from 'react';
import './App.css';
import { TodoList } from './components';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const initialTodoList = [
    {
      id: uuidv4(),
      name: 'read how to Docker',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'test PHPUnit',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'React Practice',
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodoList)
  const todoNameRef = useRef();
  const handleAddTodo = () => {
    if (!todoNameRef.current.value) return
        
    const newTodo = {
      id: uuidv4(),
      name: todoNameRef.current.value,
      completed: false,
    };
        
    setTodos([...todos, newTodo]);
    todoNameRef.current.value = null;
  }
  
  const handleIsCompleted = (id) => {
    const newTodos = todos.slice();
    const targetTodo = newTodos.find(todo => todo.id === id);
    if (!targetTodo) return;
    
    targetTodo.completed = !targetTodo.completed;
    setTodos(newTodos)
  }
  
  const deleteCompleted = () => {
    const umComped = todos.filter(todo => !todo.completed)
    
    setTodos(umComped);
  }
    
  return (
    <div className="container">
      <div className="taskTitle">Task Management App</div>
      <div className="inputForm">
        <input type="text" ref={todoNameRef} />
        <button onClick={handleAddTodo}><i className="fa-solid fa-plus"></i></button>
        <button onClick={deleteCompleted}><i className="fa-solid fa-trash"></i></button>      
      </div>
      <div className="taskCount">残りのタスク: {todos.filter(todo => !todo.completed).length}</div>
      <TodoList todos={todos} onClick={handleIsCompleted} />
    </div>
  );
}

export default App;
