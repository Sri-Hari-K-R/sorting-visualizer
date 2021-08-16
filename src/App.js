// import React,{useState} from "react";
import React from 'react';
import './App.css';
import Visualizer from "./Visualizer/Visualizer"

function App() {  
  // const [{count1,count2},setCount] = useState({count1:10,count2:20});
  return (
    <div className="App">
      {/* <button onClick={()=>setCount(current => ({...current,count1:current.count1+1,count2:current.count2+1}))}>+</button>
      <button onClick={()=>setCount(current => ({...current,count1:current.count1-1,count2:current.count2-1}))}>-</button>
      <div>{count1}</div>
      <div>{count2}</div> */}
      <Visualizer></Visualizer>
    </div>
  );
}

export default App;
  