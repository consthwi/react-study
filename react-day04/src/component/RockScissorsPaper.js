import React, { useState } from "react";
import Box from "./Box";
import "./RockScissorsPaper.css";

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

const RockScissorsPaper = ({ playerName }) => {
  const [playerSelect, setPlayerSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (playerInput) => {
    const playerPick = choice[playerInput];
    setPlayerSelect(playerPick);
    const comPick = comRndChoice();
    setComSelect(comPick);
    setResult(judgement(playerPick, comPick));
  };
  const comRndChoice = () => {
    const makeItemArray = Object.keys(choice);
    const rndIdx = Math.floor(Math.random() * 3);
    return choice[makeItemArray[rndIdx]];
  };
  const judgement = (player, com) => {
    console.log("player", player, "com", com);
    if (player.name === com.name) {
      return "Tie!";
    } else if (player.name === "Rock") {
      return com.name === "Scissors" ? "Win!" : "Lose :<";
    } else if (player.name === "Scissors") {
      return com.name === "Paper" ? "Win!" : "Lose :<";
    } else if (player.name === "Paper") {
      return com.name === "Rock" ? "Win!" : "Lose :<";
    }
  };

  return (
    <main className="RockScissorsPaper">
      <section className="game-area">
        <Box name={playerName} item={playerSelect} result={result} />
        <Box name={"Computer"} item={comSelect} result={result} />
      </section>
      <section className="choice-area">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </section>
    </main>
  );
};

export default RockScissorsPaper;
