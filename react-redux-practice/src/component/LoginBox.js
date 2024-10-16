import React from "react";
import { useSelector } from "react-redux";
import "./LoginBox.css";

const LoginBox = () => {
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  return id !== "" && password !== "" ? (
    <div className="LoginBox">
      <div>ID: {id}</div>
      <div>PW: {password}</div>
    </div>
  ) : null;
};

export default LoginBox;
