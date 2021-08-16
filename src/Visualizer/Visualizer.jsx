import React,{useEffect,useState} from "react"
import './Visualizer.css'

export default function Visualizer(){

    let [array,setArray] = useState([]);
    let [size,setSize] = useState(11);
    let [color,setColor] = useState(true);

    useEffect(()=>{
        setArray(array = resetArray(size-1));
    },[]);
    return(
        <>  
            <div className="contents">
            <div className="array-container">
            {array.map((value,idx)=>(   
                <div className={color ? "purpleColor array-bar":"blueColor array-bar"} style={{height:`${value}px`,width:`${8000/(size+1)}px`}}></div>
            ))}
            </div>
            <div>{8000/(size+1)}</div>
            <button className="bn3637 bn37" onClick={()=>{setArray(array = resetArray(size))}}>Generate new array</button><br></br><br></br>
            <button className="bn3637 bn37" onClick={()=>{setColor(color = !color)}}>Toggle Color</button><br></br><br></br>
            <button className="bn3637 bn37" onClick={()=>{setArray(array = swapElements(array))}}>Swap Elements</button><br></br><br></br>
            <input type="range" min="10" max="300" class="slider" onChange={(e)=>{setSize(size = e.target.value);setArray(array = resetArray(size))}}></input>
            <div>{size}</div>
            </div>
        </>
    );
}

function randomIntFromFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function swapElements(array){
    let array1 = array;
    return array1.reverse();
}
function resetArray(size){
    const array1 = [];
    for( let i=0;i<size;i++){
        array1.push(randomIntFromFromInterval(10,600));
    }

    return array1;
}