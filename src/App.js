import { useState } from 'react';
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
  

  return (
    <div className="App">
			{/* <Title title={title} /> */}
			{/* <Content content={props.content} /> */}
			{/* <button onClick={() => setIsPublished(!isPublished)}>公開</button> */}
			{/* <PublishButton onClick={handleIsPublished} isPublished={isPublished} /> */}
			{/* <TextInput /> */}
			{/* <Counter /> */}
      <ToggleButton />
    </div>
  );
}

export default App;
