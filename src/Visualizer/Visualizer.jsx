import React, { useEffect, useState } from "react";
import "./Visualizer.css";

export default function Visualizer() {
  const randomIntFromFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const resetArray = (size) => {
    const array1 = [];
    for (let i = 0; i < size; i++) {
      array1.push(randomIntFromFromInterval(10, 600));
    }

    return array1;
  };
  let [size, setSize] = useState(50);
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
    let array1 = [...array];
    let k = 0;
    for (let i = 0; i < size - 1; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        setIndex(highlightColors(j, j + 1));
        if (array1[j] > array1[j + 1]) {
          await sleep(20);
          array1 = swapElements(array1, size, j, j + 1);
          setArray(array1);
          setIndex(highlightColors(-1, -1));
        }
      }
    }
    // console.log(array1);
    setArray(array1);
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
            bubbleSort();
          }}
        >
          Sort
        </button>
        <br></br>
        <br></br>
        <br></br>
        <input
          type="range"
          min="50"
          max="100"
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
