import React from "react";

function F4({ f4Data, f4Callback }) {
  return (
    <div id="4">
      <h1>4층</h1>
      <p>균형 점수가 깎인 횟수를 입력해주세요</p>
      <input
        type="text"
        placeholder={f4Data}
        onChange={(e) => f4Callback(e.target.value)}
      ></input>
    </div>
  );
}

export default F4;
