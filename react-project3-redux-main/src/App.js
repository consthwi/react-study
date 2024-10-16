import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductAllPage from "./page/ProductAllPage";
import Login from "./page/Login";
import Header from "./component/Header";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

// 1. 전체상품페이지, 로그인, 상품상세페이지 ... react router
// 1-2. 네비게이션 바
// 2. 전체상품페이지에서는 전체 상품을 볼 수 있다.

// 3-1. 로그인 버튼을 누르면 로그인 페이지가 나온다
// 3-2. 상품디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인페이지로 리다이렉트한다
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 5-1. 로그아웃 버튼을 클릭하면 로그아웃이 된다
// 5-2. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지로 이동한다.
// 6. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Header authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAllPage />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/products/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
