import { useState } from 'react';
import './App.css';
import { TodoList } from './components';

function App() {
  const initialTodoList = [
    {
      id: 1,
      name: 'read how to Docker',
      completed: false,
    },
    {
      id: 2,
      name: 'test PHPUnit',
      completed: false,
    },
    {
      id: 3,
      name: 'React Practice',
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodoList)
  
  return (
    <div>
      <TodoList todos={todos} test="aaaa" />
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスク</button>
      <div>残りのタスク: 0</div>
    </div>
  );
}

export default App;
