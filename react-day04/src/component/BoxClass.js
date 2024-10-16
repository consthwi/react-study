import React, { Component } from "react";
import "./BoxClass.css";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    this.finalResult = "";
    // console.log(props);
  }
  makeFinalResult = () => {
    if (
      this.props.name === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result
    ) {
      this.finalResult = this.props.result === "win" ? "lose" : "win";
    } else {
      this.finalResult = this.props.result;
    }
  };

  render() {
    this.makeFinalResult();
    return (
      <>
        <div className={`Box ${this.finalResult}`}>
          <h1>{this.props.name}</h1>
          <div className="img-wrap">
            <img
              className={this.props.name === "Computer" ? "comImg" : ""}
              src={
                this.props.item
                  ? this.props.item.img
                  : "https://github.com/Hwiwon-source/react-day02/raw/main/public/defuat_img.png"
              }
              alt="game-choice"
            />
          </div>
          <h2>{this.finalResult}</h2>
        </div>
      </>
    );
  }
}
