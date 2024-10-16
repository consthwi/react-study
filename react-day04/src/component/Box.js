import React from "react";
import "./Box.css";

const Box = (props) => {
  // console.log(props);
  let finalResult;
  if (props.name === "Computer" && props.result !== "Tie!" && props.result) {
    finalResult = props.result === "Win!" ? "Lose :<" : "Win!";
  } else {
    finalResult = props.result;
  }

  return (
    <>
      <div className="Box">
        <h1>{props.name}</h1>
        <div className="img-wrap">
          <img
            className={props.name === "Computer" ? "comImg" : ""}
            src={
              props.item
                ? props.item.img
                : "https://github.com/Hwiwon-source/react-day02/raw/main/public/defuat_img.png"
            }
            alt="game-choice"
          />
        </div>
        <h2>{finalResult}</h2>
      </div>
    </>
  );
};

export default Box;
