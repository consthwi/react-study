import React, { Component } from "react";
import BoxClass from "./BoxClass";
import "./RockScissorsPaperClass.css";

const choice = {
  rock: {
    name: "Rock",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/player_rock.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/player_scissors.png",
  },
  paper: {
    name: "Paper",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/player_paper.png",
  },
};

export default class RockScissorsPaperClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerSelect: null,
      comSelect: null,
      result: "",
    };
    // console.log(props);
  }

  play = (playerInput) => {
    const playerPick = choice[playerInput];
    const comPick = this.comRndChoice();
    this.setState({
      playerSelect: playerPick,
      comSelect: comPick,
      result: this.judgement(playerPick, comPick),
    });
  };

  comRndChoice = () => {
    const makeItemArray = Object.keys(choice);
    const rndIdx = Math.floor(Math.random() * 3);
    return choice[makeItemArray[rndIdx]];
  };

  judgement = (player, com) => {
    // console.log("player", player, "com", com);
    if (player.name === com.name) {
      return "tie";
    } else if (player.name === "Rock") {
      return com.name === "Scissors" ? "win" : "lose";
    } else if (player.name === "Scissors") {
      return com.name === "Paper" ? "win" : "lose";
    } else if (player.name === "Paper") {
      return com.name === "Rock" ? "win" : "lose";
    }
  };

  render() {
    return (
      <>
        <main className="RockScissorsPaper">
          <section className="game-area">
            <BoxClass
              name={this.props.playerName}
              item={this.state.playerSelect}
              result={this.state.result}
            />
            <BoxClass
              name={"Computer"}
              item={this.state.comSelect}
              result={this.state.result}
            />
          </section>
          <section className="choice-area">
            <button onClick={() => this.play("scissors")}>가위</button>
            <button onClick={() => this.play("rock")}>바위</button>
            <button onClick={() => this.play("paper")}>보</button>
          </section>
        </main>
      </>
    );
  }
}
