import React from "react";

function F2({
  f2Callback0,
  f2Callback1,
  f2Callback2,
  f2Callback3,
  f2Callback4,
  f2Callback5,
}) {
  return (
    <div id="2">
      <h1>2층</h1>
      <div className="firstCard">
        <p>처음 주운 카드를 체크해주세요</p>
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

      <div className="cards">
        <p>각 결계를 해제하는데 사용한 카드의 번호를 체크해주세요</p>
        레드{" "}
        <input
          type="radio"
          name="redCard"
          value="1"
          onChange={(e) => f2Callback2(1, 0)}
        ></input>
        1
        <input
          type="radio"
          name="redCard"
          value="2"
          onChange={(e) => f2Callback2(2, 0)}
        ></input>
        2
        <input
          type="radio"
          name="redCard"
          value="3"
          onChange={(e) => f2Callback2(3, 0)}
        ></input>
        3
        <input
          type="radio"
          name="redCard"
          value="4"
          onChange={(e) => f2Callback2(4, 0)}
        ></input>
        4
        <input
          type="radio"
          name="redCard"
          value="5"
          onChange={(e) => f2Callback2(5, 0)}
        ></input>
        5
        <input
          type="radio"
          name="redCard"
          value="6"
          onChange={(e) => f2Callback2(6, 0)}
        ></input>
        6
        <input
          type="radio"
          name="redCard"
          value="7"
          onChange={(e) => f2Callback2(7, 0)}
        ></input>
        7
        <input
          type="radio"
          name="redCard"
          value="1"
          onChange={(e) => f2Callback2(8, 0)}
        ></input>
        바이올렛 <br />
        블루{" "}
        <input
          type="radio"
          name="blueCard"
          value="1"
          onChange={(e) => f2Callback2(1, 1)}
        ></input>
        1
        <input
          type="radio"
          name="blueCard"
          value="2"
          onChange={(e) => f2Callback2(2, 1)}
        ></input>
        2
        <input
          type="radio"
          name="blueCard"
          value="3"
          onChange={(e) => f2Callback2(3, 1)}
        ></input>
        3
        <input
          type="radio"
          name="blueCard"
          value="4"
          onChange={(e) => f2Callback2(4, 1)}
        ></input>
        4
        <input
          type="radio"
          name="blueCard"
          value="5"
          onChange={(e) => f2Callback2(5, 1)}
        ></input>
        5
        <input
          type="radio"
          name="blueCard"
          value="6"
          onChange={(e) => f2Callback2(6, 1)}
        ></input>
        6
        <input
          type="radio"
          name="blueCard"
          value="7"
          onChange={(e) => f2Callback2(7, 1)}
        ></input>
        7
        <input
          type="radio"
          name="blueCard"
          value="7"
          onChange={(e) => f2Callback2(8, 1)}
        ></input>
        바이올렛
        <br />
        그린{" "}
        <input
          type="radio"
          name="greenCard"
          value="1"
          onChange={(e) => f2Callback2(1, 2)}
        ></input>
        1
        <input
          type="radio"
          name="greenCard"
          value="2"
          onChange={(e) => f2Callback2(2, 2)}
        ></input>
        2
        <input
          type="radio"
          name="greenCard"
          value="3"
          onChange={(e) => f2Callback2(3, 2)}
        ></input>
        3
        <input
          type="radio"
          name="greenCard"
          value="4"
          onChange={(e) => f2Callback2(4, 2)}
        ></input>
        4
        <input
          type="radio"
          name="greenCard"
          value="5"
          onChange={(e) => f2Callback2(5, 2)}
        ></input>
        5
        <input
          type="radio"
          name="greenCard"
          value="6"
          onChange={(e) => f2Callback2(6, 2)}
        ></input>
        6
        <input
          type="radio"
          name="greenCard"
          value="7"
          onChange={(e) => f2Callback2(7, 2)}
        ></input>
        7
        <input
          type="radio"
          name="greenCard"
          value="7"
          onChange={(e) => f2Callback2(8, 2)}
        ></input>
        바이올렛
        <br />
        옐로우
        <input
          type="radio"
          name="yellowCard"
          value="1"
          onChange={(e) => f2Callback2(1, 3)}
        ></input>
        1
        <input
          type="radio"
          name="yellowCard"
          value="2"
          onChange={(e) => f2Callback2(2, 3)}
        ></input>
        2
        <input
          type="radio"
          name="yellowCard"
          value="3"
          onChange={(e) => f2Callback2(3, 3)}
        ></input>
        3
        <input
          type="radio"
          name="yellowCard"
          value="4"
          onChange={(e) => f2Callback2(4, 3)}
        ></input>
        4
        <input
          type="radio"
          name="yellowCard"
          value="5"
          onChange={(e) => f2Callback2(5, 3)}
        ></input>
        5
        <input
          type="radio"
          name="yellowCard"
          value="6"
          onChange={(e) => f2Callback2(6, 3)}
        ></input>
        6
        <input
          type="radio"
          name="yellowCard"
          value="7"
          onChange={(e) => f2Callback2(7, 3)}
        ></input>
        7
        <input
          type="radio"
          name="yellowCard"
          value="7"
          onChange={(e) => f2Callback2(8, 3)}
        ></input>
        바이올렛
      </div>

      <div className="lastCard">
        <p>마지막 주운 카드를 체크해주세요</p>
        <button name="red" onClick={(e) => f2Callback3("red")}>
          레 드
        </button>
        <button name="blue" onClick={(e) => f2Callback3("blue")}>
          블 루
        </button>
        <button name="green" onClick={(e) => f2Callback3("green")}>
          그 린
        </button>
        <button name="yellow" onClick={(e) => f2Callback3("yellow")}>
          옐로우
        </button>
        <button name="violet" onClick={(e) => f2Callback3("violet")}>
          바이올렛
        </button>
        <br />
        <input
          type="radio"
          name="lastCard"
          value="1"
          onChange={(e) => f2Callback4(1)}
        ></input>
        1
        <input
          type="radio"
          name="lastCard"
          value="2"
          onChange={(e) => f2Callback4(2)}
        ></input>
        2
        <input
          type="radio"
          name="lastCard"
          value="3"
          onChange={(e) => f2Callback4(3)}
        ></input>
        3
        <input
          type="radio"
          name="lastCard"
          value="4"
          onChange={(e) => f2Callback4(4)}
        ></input>
        4
        <input
          type="radio"
          name="lastCard"
          value="5"
          onChange={(e) => f2Callback4(5)}
        ></input>
        5
        <input
          type="radio"
          name="lastCard"
          value="6"
          onChange={(e) => f2Callback4(6)}
        ></input>
        6
        <input
          type="radio"
          name="lastCard"
          value="7"
          onChange={(e) => f2Callback4(7)}
        ></input>
        7
      </div>
      <div className="total">
        <p>총 주운 카드 수를 입력해주세요</p>
        <input
          type="text"
          onChange={(e) => f2Callback5(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default F2;
