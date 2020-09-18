import React from "react";

function F9({ f9Callback0, f9Callback1, f9Fail }) {
  return (
    <div id="9">
      <h1>9층</h1>
      <p>통과한 발판의 번호를 선택해주세요(왼쪽부터 1)</p>
      <div className="floor1">
        <input
          type="radio"
          name="numFloor1"
          value="1"
          onChange={(e) => f9Callback0(0, 1)}
        ></input>
        <input
          type="radio"
          name="numFloor1"
          value="2"
          onChange={(e) => f9Callback0(0, 2)}
        ></input>
        <input
          type="radio"
          name="numFloor1"
          value="3"
          onChange={(e) => f9Callback0(0, 3)}
        ></input>
        <input
          type="radio"
          name="numFloor1"
          value="4"
          onChange={(e) => f9Callback0(0, 4)}
        ></input>
      </div>

      <div className="floor2">
        <input
          type="radio"
          name="numFloor2"
          value="1"
          onChange={(e) => f9Callback0(1, 1)}
        ></input>
        <input
          type="radio"
          name="numFloor2"
          value="2"
          onChange={(e) => f9Callback0(1, 2)}
        ></input>
        <input
          type="radio"
          name="numFloor2"
          value="3"
          onChange={(e) => f9Callback0(1, 3)}
        ></input>
        <input
          type="radio"
          name="numFloor2"
          value="4"
          onChange={(e) => f9Callback0(1, 4)}
        ></input>
      </div>

      <div className="floor3">
        <input
          type="radio"
          name="numFloor3"
          value="1"
          onChange={(e) => f9Callback0(2, 1)}
        ></input>
        <input
          type="radio"
          name="numFloor3"
          value="2"
          onChange={(e) => f9Callback0(2, 2)}
        ></input>
        <input
          type="radio"
          name="numFloor3"
          value="3"
          onChange={(e) => f9Callback0(2, 3)}
        ></input>
        <input
          type="radio"
          name="numFloor3"
          value="4"
          onChange={(e) => f9Callback0(2, 4)}
        ></input>
      </div>

      <div className="floor4">
        <input
          type="radio"
          name="numFloor4"
          value="1"
          onChange={(e) => f9Callback0(3, 1)}
        ></input>
        <input
          type="radio"
          name="numFloor4"
          value="2"
          onChange={(e) => f9Callback0(3, 2)}
        ></input>
        <input
          type="radio"
          name="numFloor4"
          value="3"
          onChange={(e) => f9Callback0(3, 3)}
        ></input>
        <input
          type="radio"
          name="numFloor4"
          value="4"
          onChange={(e) => f9Callback0(3, 4)}
        ></input>
      </div>

      <div className="floor5">
        <input
          type="radio"
          name="numFloor5"
          value="1"
          onChange={(e) => f9Callback0(4, 1)}
        ></input>
        <input
          type="radio"
          name="numFloor5"
          value="2"
          onChange={(e) => f9Callback0(4, 2)}
        ></input>
        <input
          type="radio"
          name="numFloor5"
          value="3"
          onChange={(e) => f9Callback0(4, 3)}
        ></input>
        <input
          type="radio"
          name="numFloor5"
          value="4"
          onChange={(e) => f9Callback0(4, 4)}
        ></input>
      </div>

      <div className="floor6">
        <input
          type="radio"
          name="numFloor6"
          value="1"
          onChange={(e) => f9Callback0(5, 1)}
        ></input>
        <input
          type="radio"
          name="numFloor6"
          value="2"
          onChange={(e) => f9Callback0(5, 2)}
        ></input>
        <input
          type="radio"
          name="numFloor6"
          value="3"
          onChange={(e) => f9Callback0(5, 3)}
        ></input>
        <input
          type="radio"
          name="numFloor6"
          value="4"
          onChange={(e) => f9Callback0(5, 4)}
        ></input>
      </div>

      <div className="floor7">
        <input
          type="radio"
          name="numFloor7"
          value="1"
          onChange={(e) => f9Callback0(6, 1)}
        ></input>
        <input
          type="radio"
          name="numFloor7"
          value="2"
          onChange={(e) => f9Callback0(6, 2)}
        ></input>
        <input
          type="radio"
          name="numFloor7"
          value="3"
          onChange={(e) => f9Callback0(6, 3)}
        ></input>
        <input
          type="radio"
          name="numFloor7"
          value="4"
          onChange={(e) => f9Callback0(6, 4)}
        ></input>
      </div>

      <div className="floor8">
        <input
          type="radio"
          name="numFloor8"
          value="1"
          onChange={(e) => f9Callback0(7, 1)}
        ></input>
        <input
          type="radio"
          name="numFloor8"
          value="2"
          onChange={(e) => f9Callback0(7, 2)}
        ></input>
        <input
          type="radio"
          name="numFloor8"
          value="3"
          onChange={(e) => f9Callback0(7, 3)}
        ></input>
        <input
          type="radio"
          name="numFloor8"
          value="4"
          onChange={(e) => f9Callback0(7, 4)}
        ></input>
      </div>

      <p>발판을 틀린 횟수를 입력해주세요</p>
      <input
        type="text"
        placeholder={f9Fail}
        onChange={(e) => f9Callback1(e.target.value)}
      ></input>
    </div>
  );
}

export default F9;
