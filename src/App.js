import React,{useState} from 'react';
import './App.css';
// importing components
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {

  const[inputText ,setText]=useState("");
  const[todo,todos]=useState([]);
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form setText={setText}/> 
      <TodoList/>  
    </div>
  );
}

export default App;
