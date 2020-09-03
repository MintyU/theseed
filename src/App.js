import React, { useState } from "react";
import "./App.css";

import F0 from "./floors/f0";
import F1 from "./floors/f1";
import F2 from "./floors/f2";

function App() {
  const [floor, setFloor] = useState(0);
  const [f0Data, setF0Data] = useState(0);
  const [f1Data0, setF1Data0] = useState(0);
  const [f1Data1, setF1Data1] = useState(0);
  const [f2First, setF2First] = useState(["", 0]);
  const [f2Last, setF2Last] = useState(["", 0]);
  const [f2Total, setF2Total] = useState(0);
  const [f2Cards, setF2Cards] = useState([0, 0, 0, 0]);

  const handleF0 = (f0Input) => {
    setF0Data(f0Input);
  };

  const handleF1_0 = (f1Input0) => {
    setF1Data0(f1Input0);
  };
  const handleF1_1 = (f1Input1) => {
    setF1Data1(f1Input1);
  };

  {
    /*Change F2 First Card's Color*/
  }
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

  {
    /*Change F2 First Card's Number*/
  }
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

  return (
    <div className="App">
      {floor === 0 && <F0 f0Data={f0Data} f0Callback={handleF0} />}
      {floor === 1 && (
        <F1
          f1Data0={f1Data0}
          f1Data1={f1Data1}
          f1Callback0={handleF1_0}
          f1Callback1={handleF1_1}
        />
      )}
      {floor === 2 && (
        <F2 f2Callback0={handleF2First0} f2Callback1={handleF2First1} />
      )}
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
      f2Cards:
      {f2Cards.map((card, idx) => (
        <li key={idx}>{card}</li>
      ))}
    </div>
  );
}

export default App;
