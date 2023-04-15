import React, { useState } from "react";
import './App.css';

function App() {
const [value, setValue] = useState(null)
const submitHandler =()=>{
  console.log(value)
}


  return (
    <div className="App">
      <div className="form">

            <label htmlFor="">Verify</label>
            <input placeholder="Enter here..."  value={value}  onChange={e=>setValue(e.target.value)} />
                <button onClick={submitHandler} >Submit</button>
      </div>
               </div>
  );
}

export default App;
