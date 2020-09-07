import React from "react";

function F6({ f6Callback, f6Data }) {
  return (
    <div id="6">
      <h1>6층</h1>
      <p>잡은 킹슬라임의 수를 입력해주세요</p>
      <p>놓치지 않고 모두 잡고 완료했다면 보통 3마리입니다</p>
      <input
        type="text"
        placeholder={f6Data}
        onChange={(e) => f6Callback(e.target.value)}
      ></input>
    </div>
  );
}

export default F6;
