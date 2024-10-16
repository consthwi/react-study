// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./component/Box";
import LoginBox from "./component/LoginBox";

function App() {
  // const [count, setCount] = useState(0);
  // => state는 더이상 App에서 만드는 것이 아니라 store(redux)에서 생성
  const count = useSelector((state) => {
    return state.count;
  });

  // useSelector는 함수를 받는다.
  // state를 매개변수로 주어 store에 있는 모든 state를 전달한다.
  // 그중 store객체 안에 있는 count값만 들고 온다.
  // ** count값에 우항의 값을 넣기 위해 useSelector()의 인자로 return값이 있는 함수를 넣는다.

  const dispatch = useDispatch();

  const increment = () => {
    // action은 단순한 객체... type, payload key필요
    // type : action의 이름
    dispatch({ type: "INCREMENT", payload: { actionNum: 5 } });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const login = () => {
    let userId = prompt("ID를 입력해주세요");
    let userPassword = prompt("PW를 입력해주세요");

    function maskPassword(password) {
      if (password.length <= 2) {
        return password; // 비밀번호가 2자리 이하라면 그대로 반환
      }
      const firstTwoChars = password.slice(0, 2); // 첫 번째와 두 번째 문자 추출
      const maskedPart = "*".repeat(password.length - 2); // 나머지 부분을 *로 변환
      return firstTwoChars + maskedPart;
    }

    if (userId !== "" && userPassword !== "") {
      dispatch({
        type: "LOGIN",
        payload: { id: userId, password: maskPassword(userPassword) },
      });
    } else {
      alert("아이디 또는 비밀번호가 잘못되었습니다.");
      return;
    }
  };

  return (
    <div className="counter-container">
      <LoginBox />
      <h1 className="counter-title">Redux-Counter</h1>
      <div className="counter">
        <button className="counter-btn" onClick={decrement}>
          -
        </button>
        <span className="counter-value">{count}</span>
        <button className="counter-btn" onClick={increment}>
          +
        </button>
      </div>
      <div className="counter-login-box">
        <button className="counter-login-btn" onClick={login}>
          Login
        </button>
      </div>
      <Box />
    </div>
  );
}

export default App;
