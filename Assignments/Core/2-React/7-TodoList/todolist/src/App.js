import './App.css';
import TodoForm from './components/TodoForm';
// import List from './components/List';
// import { nanoid } from 'nanoid';
import {useState} from 'react';
import Display from './components/Display';

function App() {
  const todoList =[
    {description:"Python Red Belt", done: false},
    {description:"Blunt Fakie Flip", done: false}
  ]

  const [list, setList] = useState(todoList)
  return (
    <div className="App">
      <TodoForm list={list} setList={setList} />
      {/* <List list={list} setList={setList} /> */}
      <Display list={list} setList={setList}/>
    </div>
  );
}

export default App;
