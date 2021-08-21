import React, { useEffect, useState } from "react";
import "./Visualizer.css";
// import getSize from './getSize';

export default function Visualizer() {
  const randomIntFromFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const resetArray = (size) => {
    const array1 = [];
    // let num = 600;
    for (let i = 0; i < size; i++) {
      array1.push(randomIntFromFromInterval(10, 600));
      // array1.push(num);
      // num-=10;
    }

    return array1;
  };
  // const {sheight,swidth} = useWindowDimensions();
  let [size, setSize] = useState(10);
  const [array, setArray] = useState(resetArray(size));

  let [color, setColor] = useState(true);
  const [index, setIndex] = useState([]);

  //   useEffect(() => {
  //     // setArray();
  //   }, []);
  useEffect(() => {});
  const highlightColors = (i, j) => {
    let arr = [];
    arr.push(i);
    arr.push(j);
    return arr;
  };
  const swapColorClick = (e) => {
    console.log(e);
    setIndex(highlightColors(5, 7));
    setTimeout(() => {
      setArray(swapElements(array, size, 5, 7));
      setIndex(highlightColors(-1, -1));
    }, 300);
  };
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const bubbleSort = async () => {
    // debugger;
    let array1 = [...array];
    let k = 0;
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        if (array1[i] > array1[j]) {
          await sleep(1000);
          console.log(1 + " this loop " + i);
          //   setIndex(highlightColors(i, j));
          //   while (k < 1000000000) k++;

          array1 = swapElements(array1, size, i, j);
          setArray(array1);
          //   setTimeout(() => {
          //     array1 = swapElements(array1, size, i, j);
          //     setArray(array1);
          //     setIndex(highlightColors(-1, -1));
          //   }, i * 10);
        }
      }
    }
    console.log(array1);
    return array1;
  };

  const swapElements = (array, size, i1, i2) => {
    const array1 = [];
    for (let i = 0; i < size; i++) {
      if (i == i1) {
        array1.push(array[i2]);
      } else if (i == i2) {
        array1.push(array[i1]);
      } else {
        array1.push(array[i]);
      }
    }
    return array1;
  };

  return (
    <>
      <div className="contents">
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className={
                color == true && (idx === index[0] || idx === index[1])
                  ? "blueColor array-bar"
                  : "purpleColor array-bar"
              }
              style={{
                height: `${value}px`,
                width: `${(1500 - size * 2) / size}px`,
              }}
            >
              {value}
            </div>
          ))}
        </div>
        <div>{(1500 - size * 2) / size}</div>
        <button
          className="bn3637 bn37"
          onClick={() => {
            setArray(resetArray(size));
          }}
        >
          Generate new array
        </button>
        <button className="bn3637 bn37" onClick={(e) => swapColorClick(e)}>
          Swap Color
        </button>
        <button
          className="bn3637 bn37"
          onClick={() => {
            console.log("f");
            setArray(bubbleSort());
          }}
        >
          Sort
        </button>
        <br></br>
        <br></br>
        <br></br>
        <input
          type="range"
          min="10"
          max="300"
          className="slider"
          onChange={(e) => {
            setSize((size = e.target.value));
            setArray(resetArray(size));
          }}
        ></input>
        <div>{size}</div>
      </div>
    </>
  );
}
