import React, { useState } from "react";
import "./App.css";

import F0 from "./floors/f0";
import F1 from "./floors/f1";
import F2 from "./floors/f2";
import F3 from "./floors/f3";
import F4 from "./floors/f4";
import F5 from "./floors/f5";
import F6 from "./floors/f6";

function App() {
  const [floor, setFloor] = useState(0);
  const [f0Data, setF0Data] = useState(0);
  const [f1Data0, setF1Data0] = useState(0);
  const [f1Data1, setF1Data1] = useState(0);
  const [f2First, setF2First] = useState(["", 0]);
  const [f2Last, setF2Last] = useState(["", 0]);
  const [f2Total, setF2Total] = useState(0);
  const [f2Cards, setF2Cards] = useState([0, 0, 0, 0]);
  const [f3Data, setF3Data] = useState([0, 0, 0]);
  const [f4Data, setF4Data] = useState(0);
  const [f6Data, setF6Data] = useState(0);

  /*Change F2 First Card's Color*/
  const handleF2First0 = (colorInput) => {
    setF2First(
      f2First.map((a, i) => {
        if (i === 0) {
          return colorInput;
        } else {
          return a;
        }
      })
    );
  };

  /*Change F2 First Card's Number*/
  const handleF2First1 = (numInput) => {
    setF2First(
      f2First.map((a, i) => {
        if (i === 1) {
          return numInput;
        } else {
          return a;
        }
      })
    );
  };

  /*Change F2 Last Card's Color*/
  const handleF2Last0 = (colorInput) => {
    setF2Last(
      f2Last.map((a, i) => {
        if (i === 0) {
          return colorInput;
        } else {
          return a;
        }
      })
    );
  };

  /*Change F2 Last Card's Number*/
  const handleF2Last1 = (numInput) => {
    setF2Last(
      f2Last.map((a, i) => {
        if (i === 1) {
          return numInput;
        } else {
          return a;
        }
      })
    );
  };

  /* cardNum is the number of the Card!(number 8 is the violet card)
    argument "i" is the color of the card(0:red, 1:blue, 2:green, 3: yellow)*/
  const handleF2Cards = (cardNum, i) => {
    setF2Cards(
      f2Cards.map((card, j) => {
        if (j === i) {
          return cardNum;
        } else {
          return card;
        }
      })
    );
  };

  const handleF3Data = (i, n) => {
    setF3Data(
      f3Data.map((data, j) => {
        if (j === i) {
          return n;
        } else {
          return data;
        }
      })
    );
  };

  return (
    <div className="App">
      {floor === 0 && <F0 f0Data={f0Data} f0Callback={setF0Data} />}
      {floor === 1 && (
        <F1
          f1Data0={f1Data0}
          f1Data1={f1Data1}
          f1Callback0={setF1Data0}
          f1Callback1={setF1Data1}
        />
      )}
      {floor === 2 && (
        <F2
          f2Callback0={handleF2First0}
          f2Callback1={handleF2First1}
          f2Callback2={handleF2Cards}
          f2Callback3={handleF2Last0}
          f2Callback4={handleF2Last1}
          f2Callback5={setF2Total}
          f2Total={f2Total}
        />
      )}
      {floor === 3 && <F3 f3Callback={handleF3Data} f3Data={f3Data} />}
      {floor === 4 && <F4 f4Callback={setF4Data} f4Data={f4Data} />}
      {floor === 5 && <F5 />}
      {floor === 6 && <F6 f6Callback={setF6Data} f6Data={f6Data} />}
      <div>
        <button
          className="prev"
          onClick={() => floor === 0 || setFloor(floor - 1)}
        >
          이전
        </button>

        <button className="next" onClick={() => setFloor(floor + 1)}>
          다음
        </button>
      </div>
      floor: {floor}
      <br />
      f0Data: {f0Data}
      <br />
      f1Data0: {f1Data0}
      <br />
      f1Data1: {f1Data1}
      <br />
      f2First:
      {f2First.map((a, i) => (
        <li key={i}>{a}</li>
      ))}
      <br />
      f2Last:
      {f2Last.map((a, i) => (
        <li key={i}>{a}</li>
      ))}
      <br />
      f2Cards:
      {f2Cards.map((card, idx) => (
        <li key={idx}>{card}</li>
      ))}
      f2Total:
      {f2Total}
    </div>
  );
}

export default App;
