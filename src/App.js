import React, { useState } from "react";
import "./App.css";

import F0 from "./floors/f0";
import F1 from "./floors/f1";

function App() {
  const [floor, setFloor] = useState(0);
  const [f0Data, setF0Data] = useState(0);
  const [f1Data0, setF1Data0] = useState(0);
  const [f1Data1, setF1Data1] = useState(0);

  const handleF0 = (f0Input) => {
    setF0Data(f0Input);
  };

  const handleF1_0 = (f1Input0) => {
    setF1Data0(f1Input0);
  };
  const handleF1_1 = (f1Input1) => {
    setF1Data1(f1Input1);
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
    </div>
  );
}

export default App;
