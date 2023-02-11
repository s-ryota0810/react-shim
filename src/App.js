import { useState, useEffect } from 'react';
import { Content, Title, PublishButton, TextInput, Counter, ToggleButton } from './components/index'
import './App.css';

function App() {
  //Title
  // const [title, setTitle] = useState('hoge');
  
  //Content
  // const [content, setContent] = useState('Content');
  
  // PublishButton
  // const [isPublished, setIsPublished] = useState(true);
  // const handleIsPublished = () => {
  //   setIsPublished(!isPublished)
  // }
  const [name, setName] = useState('');
  const [id, setId] = useState('deatiger');
  const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook'];
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  }
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      setName(data.name)
      console.log(data)
      // setName(data.name)
    })
    .catch(error => {
      console.log(error)
    })
  }, [id])

  return (
    <div className="App">
			{/* <Title title={title} />
			<Content content={content} />
			<PublishButton onClick={handleIsPublished} isPublished={isPublished} /><br />
			<TextInput />
			<Counter /> */}
      {/* <ToggleButton /> */}
      <button onClick={getRandomId}>{id}</button>
      <p>name: {name}</p>
    </div>
  );
}

export default App;
