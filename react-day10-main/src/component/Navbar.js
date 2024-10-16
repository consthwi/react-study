import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./Navbar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  // 로그인 핸들링
  const handleLogin = () => {
    authenticate ? goToLogout() : goToLogin();
  };
  const goToLogin = () => {
    navigate("/login");
  };
  const goToLogout = () => {
    alert("로그아웃 되었습니다.");
    setAuthenticate(false);
  };
  const goToHome = () => {
    navigate("/");
  };

  return (
    <Container className="Navbar">
      <div>
        <div className="login-area" onClick={handleLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="logo-section">
        <img
          onClick={goToHome}
          width="100px"
          src="https://static.vecteezy.com/system/resources/previews/023/871/762/non_2x/hm-brand-logo-symbol-black-design-hennes-and-mauritz-clothes-fashion-illustration-free-vector.jpg"
          alt="h&mLogo"
        />
      </div>
      <div className="menu-area">
        <Menu />
        <div className="search-box m-0">
          <FontAwesomeIcon icon={faSearch} />
          <input className="search-input" type="text" placeholder="드레스" />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
