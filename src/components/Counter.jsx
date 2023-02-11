import { useState, useEffect } from 'react'

const Counter = () => {
	const [num, setNum] = useState(0);
	const [num2, setNum2] = useState(0);
	
	const countUp = () => {
		setNum(prevState =>	prevState + 1);
	}
	
	const countDown = () => {
		setNum(prevState => prevState - 1);
	}
	
	const count2Up = () => {
		setNum2(prevState => prevState + 2);
	}
	
	const count2Down = () => {
		setNum2(prevState => prevState - 2);
	}
	
	useEffect(() => {
		console.log('current', num)
	}, [num])
	
	return (
		<>
			<div>
				<p>現在のカウント数: {num}</p>
				<button onClick={countUp}>カウントあっぷ</button><br />
				<button onClick={countDown}>カウントダウン</button>		
			</div>
			<div>
				<p>現在のカウント2数：{num2}</p>
				<button onClick={count2Up}>カウント２アップ</button>
				<button onClick={count2Down}>カウント２ダウン</button>
			</div>
		</>
	)
}

export default Counter;
