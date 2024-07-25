import { useState } from "react";

export function Game() {
  const [position, setPosition] = useState([50, 80]);
  const [size, setSize] = useState(50);

  function upClick() {
    setPosition([position[0], position[1] - 10]);
  }

  function downClick() {
    setPosition([position[0], position[1] + 10]);
  }

  function leftClick() {
    setPosition([position[0] + 10, position[1]]);
  }

  function rightClick() {
    setPosition([position[0] - 10, position[1]]);
  }
  function sizeUpClick() {
    setSize(size + 10);
  }
  function sizeDownClick() {
    setSize(size - 10);
  }
  function resetButtonClick() {
    setPosition([50, 80]);
    setSize(50);
  }

  return (
    <div className="gameBox">
      <div className="buttonBox">
        <div className={"buttons"}>
          <div></div>
          <button className="button" onClick={upClick}>
            up
          </button>
          <div></div>
          <button className="button" onClick={rightClick}>
            right
          </button>
          <button className="button" onClick={downClick}>
            down
          </button>
          <button className="button" onClick={leftClick}>
            left
          </button>
          <div></div>
        </div>
      </div>
      <div
        className="ball"
        style={{
          position: "absolute",
          top: position[1] + "px",
          left: position[0] + "px",
          width: size + "px",
          height: size + "px",
        }}
      ></div>
      <div className="scaleButton">
        <button onClick={sizeUpClick}>ScaleUp</button>
        <button onClick={sizeDownClick}>ScaleDown</button>
        <button onClick={resetButtonClick}>Reset</button>
      </div>
    </div>
  );
}
