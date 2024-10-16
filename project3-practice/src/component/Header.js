import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import ModalCustom from "./ModalCustom"

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const menuList = [
  "여성",
  "Divided",
  "남성",
  "신생아/유아",
  "아동",
  "H&M Home",
  "Sale",
  "지속가능성",
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>

      <ModalCustom isOpen={isOpen} menuList={menuList} toggleMenu={toggleMenu} />
      <Container className='Header'>

        <div className='top-area'>
          <div onClick={toggleMenu} className={`hamburger ${isOpen ? "open" : ""}`}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className='login-box'>
            <FontAwesomeIcon icon={faUser} />
            로그인
          </div>
        </div>
        <div className='logo-area'>
          <img src="https://static.vecteezy.com/system/resources/previews/023/871/762/non_2x/hm-brand-logo-symbol-black-design-hennes-and-mauritz-clothes-fashion-illustration-free-vector.jpg" alt="logo-img" />
        </div>
        <div className='nav-area'>
          <ul className='navBar'>
            {menuList.map((menu, idx) => {
              return <li className='nav-menu' key={idx}><Link className='nav-link' to="/login">{menu}</Link></li>
            })}
          </ul>
          <div className='search-area'>
            <div className='search-box'>
              <FontAwesomeIcon icon={faSearch} />
              <input className="search-input" type="text" placeholder="드레스" />
            </div>
          </div>
        </div>

      </Container>
    </>


  )
}

export default Header
