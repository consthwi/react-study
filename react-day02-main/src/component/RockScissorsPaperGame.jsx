import React, { useState } from "react";
import PlayerBox from "./PlayerBox";
import ComBox from "./ComBox";
import "./RockScissorsPaperGame.css";

const playerChoiceList = {
  scissors: {
    name: "Scissors",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/player_scissors.png",
  },
  rock: {
    name: "Rock",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/player_rock.png",
  },
  paper: {
    name: "Paper",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/player_paper.png",
  },
};

const computerChoiceList = {
  scissors: {
    name: "Scissors",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/com_scissors.png",
  },
  rock: {
    name: "Rock",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/com_rock.png",
  },
  paper: {
    name: "Paper",
    img: "https://github.com/Hwiwon-source/react-day02/raw/main/public/com_paper.png",
  },
};

function RockScissorsPaperGame({ playerName }) {
  const [playerSelect, setPlayerSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (playerChoice) => {
    setPlayerSelect(playerChoiceList[playerChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(playerChoiceList[playerChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(computerChoiceList); // 객체의 키값만 추출하여 Array생성
    let randomIdx = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomIdx];
    // console.log(final)
    return computerChoiceList[final];
  };

  const judgement = (player, com) => {
    // console.log(player.name, com.name)
    if (player.name === com.name) {
      return "Draw!";
    } else if (player.name === "Rock") {
      return com.name === "Scissors" ? "Win!" : "Lose :<";
    } else if (player.name === "Scissors") {
      return com.name === "Paper" ? "Win!" : "Lose :<";
    } else if (player.name === "Paper") {
      return com.name === "Rock" ? "Win!" : "Lose :<";
    }
  };

  return (
    <div className="RockScissorsPaperGame">
      <div className="play-area">
        {/* PlayerBox에게 넘겨줄 item이 변화하며 UI가 리렌더링 되어야 한다. */}
        <PlayerBox name={playerName} item={playerSelect} result={result} />
        <ComBox item={computerSelect} result={result} />
      </div>
      <div className="choice-area">
        <button onClick={() => playGame("scissors")}>가위</button>
        <button onClick={() => playGame("rock")}>바위</button>
        <button onClick={() => playGame("paper")}>보</button>
      </div>
    </div>
  );
}

export default RockScissorsPaperGame;
