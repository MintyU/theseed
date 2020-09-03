import React from "react";

function F2({ f2Callback0, f2Callback1 }) {
  return (
    <div id="2">
      <h1>2층</h1>
      <div>
        <p>처음 먹은 카드를 체크해주세요</p>
        <button name="red" onClick={(e) => f2Callback0("red")}>
          레 드
        </button>
        <button name="blue" onClick={(e) => f2Callback0("blue")}>
          블 루
        </button>
        <button name="green" onClick={(e) => f2Callback0("green")}>
          그 린
        </button>
        <button name="yellow" onClick={(e) => f2Callback0("yellow")}>
          옐로우
        </button>
        <button name="violet" onClick={(e) => f2Callback0("violet")}>
          바이올렛
        </button>
        <br />
        <input
          type="radio"
          name="firstCard"
          value="1"
          onChange={(e) => f2Callback1(1)}
        ></input>
        1
        <input
          type="radio"
          name="firstCard"
          value="2"
          onChange={(e) => f2Callback1(2)}
        ></input>
        2
        <input
          type="radio"
          name="firstCard"
          value="3"
          onChange={(e) => f2Callback1(3)}
        ></input>
        3
        <input
          type="radio"
          name="firstCard"
          value="4"
          onChange={(e) => f2Callback1(4)}
        ></input>
        4
        <input
          type="radio"
          name="firstCard"
          value="5"
          onChange={(e) => f2Callback1(5)}
        ></input>
        5
        <input
          type="radio"
          name="firstCard"
          value="6"
          onChange={(e) => f2Callback1(6)}
        ></input>
        6
        <input
          type="radio"
          name="firstCard"
          value="7"
          onChange={(e) => f2Callback1(7)}
        ></input>
        7
      </div>
      <p>마지막 먹은 카드를 체크해주세요</p>
    </div>
  );
}

export default F2;
