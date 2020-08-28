import React, { useState } from "react";
import "./App.css";

import F0 from "./floors/f0";
import F1 from "./floors/f1";

function App() {
  const [floor, setFloor] = useState(0);
  return (
    <div className="App">
      {floor === 0 && <F0 />}
      {floor === 1 && <F1 />}

      <button
        className="prev"
        onClick={() => floor === 0 || setFloor(floor - 1)}
      >
        이전
      </button>

      <button className="next" onClick={() => setFloor(floor + 1)}>
        다음
      </button>

      {floor}
    </div>
  );
}

export default App;
