import React from "react";
import { useSelector } from "react-redux";
import UnderBox from "./UnderBox";
import "./Box.css";

const Box = () => {
  let count = useSelector((state) => {
    return state.count;
  });
  // App(상위컴포넌트)에서 props로 state를 넘겨받지 않고,
  // useSelector로 store 내의 값을 가져와서 사용한다.

  return (
    <div className="Box">
      <p>Redux test Box{count}</p>
      <UnderBox />
    </div>
  );
};

export default Box;
