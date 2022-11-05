import React, {useState} from "react";



function App() {
  // const [count, setCount] = useState(0);
  const [userValue, setUserValue] = useState(0);

  function increment(){
    setUserValue(Number(userValue) +10);
  }
  function decrement(){
    setUserValue(Number(userValue) -10);
  }
  function reset(){
    setUserValue(0);
  }
  
  function handleChange(event){
    setUserValue(Number(event.target.value));
  }
  
  return(
    <div className="container">
      <h1 className="counting-heading">Counting App</h1>
      <h1>{userValue}</h1>
      <button className="increase" onClick={increment}>+</button>
      <button className="decrease" onClick={decrement}>-</button>
      <button className="reset" onClick={reset}>Reset</button>
      <div className="setvalue-cont">
        <input onChange={handleChange} type ="number" placeholder="Type Your Counting Number"/>
        <button  className="values">Set Value </button>
      </div>
    </div>
  );
  
}

export default App;