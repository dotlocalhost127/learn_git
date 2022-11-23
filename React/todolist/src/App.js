import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [inputValue, setInputValue] = useState();
  const [todoList, setTodoList] = useState([]);
  const valueChangeHandler = (e)=>(
    setInputValue (e.target.value)
  );
  const addHandler = () => {
    setTodoList((prevValue) => [...prevValue, inputValue]);
    setInputValue("");
  };



  return (
  <div className="App">
    <Navbar />
    <div className="inputContainer">
    <input type="text" value = {inputValue} onChange ={valueChangeHandler}/>
    <button onClick={addHandler}>Add</button>
    </div>
    <div>
      {todoList.map((item) => {
      <li key={item}>{item}</li>
      })}
    </div>
    </div>
);

}

export default App;
