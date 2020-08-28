import React, { useState } from "react";
import "./App.css";

import F0 from "./floors/f0";
import F1 from "./floors/f1";

function App() {
  const [floor, setFloor] = useState(0);
  const [f0Data, setF0Data] = useState(0);

  const handleF0 = (f0Input) => {
    setF0Data(f0Input);
  };

  return (
    <div className="App">
      {floor === 0 && <F0 f0Callback={handleF0} />}
      {floor === 1 && <F1 />}
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
    </div>
  );
}

export default App;
