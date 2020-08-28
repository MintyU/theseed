import React from "react";

function F0({ f0Callback }) {
  return (
    <div id="0">
      <h1>로비</h1>
      <p>시작하기 전 가지고 있던 시드 포인트를 입력해주세요.</p>
      <span>
        <input type="text" onChange={(e) => f0Callback(e.target.value)}></input>
      </span>
    </div>
  );
}

export default F0;
