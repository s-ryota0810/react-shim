import { useState, useEffect } from 'react'

const ToggleButton = () => {
	const [open, setOpen] = useState(true)
	const handleIsOk = () => {
		setOpen(prevState => !prevState)
	}
	
	useEffect(() => {
		console.log('current is' + open)
		if (open) {
			console.log('subscribed!');
		}
		return () => {
			console.log('unsubscribed...');
		}
	})
	
	return(
		<button onClick={handleIsOk}>
			{ open ? 'OPEN' : 'CLOSE'}
		</button>
	)
}

export default ToggleButton;
