const Todo = ({todo, onClick}) => {
	return (
		<div className="todo">
			<label>
				<input type="checkbox" onChange={() => onClick(todo.id)} />
				<span>{todo.name}</span>
			</label>
		</div>
		
	)
}

export default Todo;
