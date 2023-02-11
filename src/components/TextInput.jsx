import { useState } from 'react';


const TextInput = () => {
	const [name, setName] = useState('')
	
	const handleName = (event) => {
		console.log(event.target.value)
		setName(event.target.value)
	}
	
	return (
		<input type="text" onChange={(event) => handleName(event)} value={name} />
	)
}

export default TextInput;
