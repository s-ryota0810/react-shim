import { Todo } from './index'

const TodoList = ({todos}) => {
	return (
		<>
			{todos.map(todo => <Todo todo={todo} key={todo.id} />)}
		</>
	)
	
}

export default TodoList;
