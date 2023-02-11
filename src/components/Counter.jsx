import { useState } from 'react'

const Counter = () => {
	const [num, setNum] = useState(0);
	
	const countUp = () => {
		setNum(prevState =>	prevState + 1);
	}
	
	const countDown = () => {
		setNum(prevState => prevState - 1);
	}
	
	return (
		<>
			<div>
				<button onClick={countUp}>+</button><br />
				<button onClick={countDown}>-</button>		
			</div>
			<p>{num}</p>
		</>
	)
}

export default Counter;
