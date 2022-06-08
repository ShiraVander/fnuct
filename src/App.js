import React, { useState } from 'react';

function App() {
	const [likes, setLikes] = useState(0)
	const [value, setValue] = useState('TEXXXXT')

	function Increment() {
		setLikes(likes + 1)
	}

	function decrement() {
		setLikes(likes - 1)
	}

	return (
		<div className="App">
			<h1>{likes}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
		</div>
	);
}

export default App;
