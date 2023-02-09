import Article from './components/Article';
import './App.css';

function App() {
  const arr = ['hogehoge', 'fugafuga', 'test']
  return (
    <div className="App">
      <header className="App-header">
        { arr.map((title) => (
          <Article
            title={title}
            content='同じ'
          />
        ))}
      </header>
    </div>
  );
}

export default App;
