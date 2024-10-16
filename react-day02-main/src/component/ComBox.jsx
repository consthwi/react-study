import React from "react";
import "./ComBox.css";

function ComBox(props) {
  let comResult;
  if (props.result !== "Draw!" && props.result !== "") {
    if (props.result === "Win!") {
      comResult = "Lose :<";
      console.log(comResult);
    } else {
      comResult = "Win!";
      console.log(comResult);
    }
  } else {
    comResult = props.result;
  }

  const winCheck = () => {
    if (comResult !== "" && comResult === "Draw!") {
      return "draw";
    } else if (comResult !== "" && comResult === "Win!") {
      return "win";
    } else if (comResult !== "" && comResult === "Lose :<") {
      return "lose";
    }
  };

  return (
    <div className={`ComBox ${winCheck()}`}>
      <h2>Computer</h2>
      <div className="img-wrap">
        <img
          src={
            props.item
              ? props.item.img
              : "https://github.com/Hwiwon-source/react-day02/raw/main/public/defuat_img2.png"
          }
          alt="comChoice"
        />
      </div>
      <p>{comResult}</p>
    </div>
  );
}

export default ComBox;
