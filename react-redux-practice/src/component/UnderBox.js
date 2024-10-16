import React from "react";
import { useSelector } from "react-redux";
import "./UnderBox.css";

const UnderBox = () => {
  let count = useSelector((state) => state.count);
  return (
    <div className="UnderBox">
      <p>Redux test UnderBox{count}</p>
    </div>
  );
};

export default UnderBox;
