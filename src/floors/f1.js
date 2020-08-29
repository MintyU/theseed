import React from "react";

function F1({ f1Data0, f1Data1, f1Callback0, f1Callback1 }) {
  return (
    <div id="1">
      <h1>1층</h1>
      <p>잡은 슬라임의 수를 입력해주세요</p>
      <span>
        <input
          type="text"
          placeholder={f1Data0}
          onChange={(e) => f1Callback0(e.target.value)}
        ></input>
        <p>누적 데미지를 입력해주세요(최대 2,147,483,647)</p>
        <input
          type="text"
          placeholder={f1Data1}
          onChange={(e) => f1Callback1(e.target.value)}
        ></input>
        <button className="max" onClick={(e) => f1Callback1(2147483647)}>
          {" "}
          최대
        </button>
      </span>
    </div>
  );
}

export default F1;
