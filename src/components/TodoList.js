import { Todo } from './index'

const TodoList = ({todos, onClick}) => {
	return (
		<div className="todoList">
			{todos.map(todo => <Todo todo={todo} key={todo.id} onClick={onClick} />)}
		</div>
	)
	
}

export default TodoList;
