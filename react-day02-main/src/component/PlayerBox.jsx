import React from "react";
import "./PlayerBox.css";

function PlayerBox(props) {
  const winCheck = () => {
    if (props.result !== "" && props.result === "Draw!") {
      return "draw";
    } else if (props.result !== "" && props.result === "Win!") {
      return "win";
    } else if (props.result !== "" && props.result === "Lose :<") {
      return "lose";
    }
  };

  return (
    <div className={`PlayerBox ${winCheck()}`}>
      <h2>{props.name}</h2>
      <div className="img-wrap">
        {/** 첫 UI 렌더링 시, null이 리턴될 경우 가드 역할 */}
        <img
          src={
            props.item
              ? props.item.img
              : "https://github.com/Hwiwon-source/react-day02/raw/main/public/defuat_img.png"
          }
          alt="playerChoice"
        />
      </div>
      <p>{props.result}</p>
    </div>
  );
}

export default PlayerBox;
