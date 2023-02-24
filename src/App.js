
//                                                      task 1-4
import React,{ useState } from 'react';
import './App.css';
import About from './Pages/About';
import Counter from './Pages/Counter';
import Home from './Pages/Home';

function App() {

  const [name, setName] = useState('this is home page');

  const change = () => {
    setName(
      <About />
    );
  }

  return (
    <>
    {/* <h1>Hello world!</h1> */}
      {/* <Home />
      <Counter /> */}
      <h1>{name}</h1>
      <button onClick={change}>change</button>
    </>
  );
}

export default App;