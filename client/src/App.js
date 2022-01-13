import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState('')

  // useEffect(() => {
  //   fetch('/hello')
  //   .then(res => res.json())
  //   .then(d => setData(d))
  // })
  
  return (
    <div className="App">
      <header className="App-header">
       {data}
      </header>
    </div>
  );
}

export default App;
