import React, { Component } from "react";
import RockScissorsPaperClass from "./component/RockScissorsPaperClass";
import "./AppClass.css";

export default class AppClass extends Component {
  render() {
    return (
      <div>
        <div className="AppClass">
          <RockScissorsPaperClass playerName={"Hwiwon"} />
        </div>
      </div>
    );
  }
}
