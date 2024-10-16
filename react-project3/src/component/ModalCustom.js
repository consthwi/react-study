import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./ModalCustom.css"

const ModalCustom = ({ isOpen, menuList, toggleMenu }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div className={`modal-layer ${isOpen ? "open" : ""}`}>

      <div className='modal-content'>
        <div onClick={toggleMenu} className={`hamburger modal ${isOpen ? "open" : ""}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`modal-nav ${isOpen ? "active" : ""}`}>
          {menuList.map((menu, idx) => {
            return <li className='modal-nav-menu' key={idx}><Link className='modal-nav-link' to="/login">{menu}</Link></li>
          })}
        </ul>
      </div>

    </div>
  )
}

export default ModalCustom
