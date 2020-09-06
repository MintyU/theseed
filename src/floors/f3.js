import React from "react";

function F3({ f3Callback, f3Data }) {
  return (
    <div id="3">
      <h1>3층</h1>
      <p>시그레타에게 말을 건 횟수를 입력해주세요</p>
      <input
        type="text"
        onChange={(e) => f3Callback(0, e.target.value)}
        placeholder={f3Data[0]}
      ></input>
      <p>플레타에게 말을 건 횟수 입력해주세요</p>
      <input
        type="text"
        onChange={(e) => f3Callback(1, e.target.value)}
        placeholder={f3Data[1]}
      ></input>
      <p>리플리에게 말을 건 횟수 입력해주세요</p>
      <input
        type="text"
        onChange={(e) => f3Callback(2, e.target.value)}
        placeholder={f3Data[2]}
      ></input>
    </div>
  );
}

export default F3;
