import { useState, useEffect } from 'react'

const ToggleButton = () => {
	const [isOk, setIsOk] = useState(true)
	const handleIsOk = () => {
		setIsOk(prevState => !prevState)
	}
	
	useEffect(() => {
		console.log('current is' + isOk)
		if (isOk) {
			console.log('subscribed!');
		}
		return () => {
			console.log('unsubscribed...');
		}
	})
	
	return(
		<button onClick={handleIsOk}>
			{ isOk ? 'OK' : 'NG'}
		</button>
	)
}

export default ToggleButton;
