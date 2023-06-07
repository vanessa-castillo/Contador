import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div align="center" className="mt-3">
    <h3>Contador</h3>
    <hr />
    <h1 className="mb-3">{count}</h1>
    <buttom 
    onClick={() => {
    setCount(count +1);
    }}
    type="buttom" 
    className="btn btn-primary m-1"
    >+1</buttom>

  <buttom 
    onClick={() => {
    setCount(count -1);
    }}
    type="buttom" 
    className="btn btn-primary m-1"
    >-1</buttom>

  <buttom 
    onClick={() => {
    setCount(0);
    }}
    type="buttom" 
    className="btn btn-primary m-1"
    >0</buttom>

    
    </div>
  )
}

export default App
