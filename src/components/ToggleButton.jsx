import { useState } from 'react'

const ToggleButton = () => {
	const [isOk, setIsOk] = useState(true)
	const handleIsOk = () => {
		setIsOk(prevState => !prevState)
	}
	
	return(
		<button onClick={handleIsOk}>
			{ isOk ? 'OKです' : 'NGです'}
		</button>
	)
}

export default ToggleButton;
