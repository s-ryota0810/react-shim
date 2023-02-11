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
			{/* <Title title={title} />
			<Content content={content} />
			<PublishButton onClick={handleIsPublished} isPublished={isPublished} /><br />
			<TextInput />
			<Counter /> */}
      <ToggleButton />
    </div>
  );
}

export default App;
