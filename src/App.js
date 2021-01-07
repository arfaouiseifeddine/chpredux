import './App.css';
import React from 'react'
import Todolist from './components/Todolist';
import Addtodo from './components/Addtodo';

function App() {
  
  
  return (
    <div className="App">
      <Addtodo  />
      <Todolist  />
    </div>
  );
}

export default App;
