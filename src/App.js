import React, { useState } from "react";
import './App.css';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [value, setValue] = useState(null)
const [id,setId] = useState(null)

const submitHandler =()=>{
  axios
      .post('http://34.131.68.37/updateDelivery', {
        id:id,
        delivery: value
      })
      .then(res => {
        toast.success('Verified Successful');
      })
      .catch(err => {
        toast.error(`Failed`);
      });
  }



  return (
    <div className="App">
      <ToastContainer />
      <div className="form">

            <label htmlFor="">Verify</label>
            <input placeholder="Enter Delivery ID..."  value={value}  onChange={e=>setValue(e.target.value)} />
            <input placeholder="Enter Order ID..."  value={id}  onChange={e=>setId(e.target.value)} />
                <button onClick={submitHandler} >Submit</button>
      </div>
               </div>
  );
}

export default App;
