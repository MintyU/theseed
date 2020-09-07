import React from "react";

function F8({ f8Callback, f8Data }) {
  return (
    <div id="8">
      <h1>8층</h1>
      <p>총 처치한 화산벌레의 수를 입력해주세요</p>
      <input
        type="text"
        placeholder={f8Data}
        onChange={(e) => f8Callback(e.target.value)}
      ></input>
    </div>
  );
}

export default F8;
