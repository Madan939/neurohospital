import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [showFb, setShowFb] = useState(false);
  const [showInst, setShowInst] = useState(false);
  const [showWtsp, setShowWtsp] = useState(false);
  const [showYt, setShowYt] = useState(false);
  const [showLdi, setShowLdn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {/* responsive view starts*/}
      <section className="resp-nav1">
        <div className="resp-nav1-div">
          <div className="resp-nav1-div-div1">
            <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          </div>
          <div className="resp-nav1-div-div2">
            <Link to="/" className="w-100">
              <img src="/images/header-logo.png" alt="header-logo" />
            </Link>
          </div>
          <div className="resp-nav1-div-div3">
            <Link to="tel:+97721416267">
              <i className="fa-solid fa-phone-flip"></i>
            </Link>
          </div>
        </div>
      </section>
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
      <button className="menu-bar-close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {menuOpen && <div className="menu-overlay" onClick={toggleMenu}>
      
        </div>}

      {/* responsive view ends*/}
      <header className="header">
        <nav className="nav-1 d-flex">
          <div className="nav-1-content d-flex justify-content-between">
            <div className="nav-1-first d-flex">
              <NavLink to="/location-map">
                <i className="fa-solid fa-location-dot"></i>&nbsp; F73M+G94,
                Jahada Road, Biratnagar
              </NavLink>
              <NavLink to="tel:+97721416267">
                <i className="fa-solid fa-phone-flip"></i>&nbsp; +977-21-416267
              </NavLink>
              <NavLink to="https://neurohospital.com.np/email">
                <i className="fa-solid fa-envelope"></i>&nbsp; Check Email
              </NavLink>
            </div>
            <div className="nav-1-second d-flex">
              <NavLink
                to="https://www.facebook.com/neurohospitalofficial/"
                className="media-container"
                onMouseOver={() => setShowFb(true)}
                onMouseLeave={() => setShowFb(false)}
              >
                <i className="fa-brands fa-square-facebook"></i>
                {showFb && <div className="media-content">Facebook</div>}
              </NavLink>

              <NavLink
                to="https://www.instagram.com/neurohospitalbrt/"
                className="media-container"
                onMouseOver={() => setShowInst(true)}
                onMouseLeave={() => setShowInst(false)}
              >
                <i className="fa-brands fa-instagram"></i>
                {showInst && <div className="media-content">Instagram</div>}
              </NavLink>
              <NavLink
                to="https://www.youtube.com/channel/UCGrHL0QQXVu1n-P29xUhmYA"
                className="media-container"
                onMouseOver={() => setShowYt(true)}
                onMouseLeave={() => setShowYt(false)}
              >
                <i className="fa-brands fa-youtube"></i>
                {showYt && <div className="media-content">Youtube</div>}
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/company/neurohospital/?originalSubdomain=np"
                className="media-container"
                onMouseOver={() => setShowLdn(true)}
                onMouseLeave={() => setShowLdn(false)}
              >
                <i className="fa-brands fa-linkedin"></i>
                {showLdi && <div className="media-content">LinkedIn</div>}
              </NavLink>
              <NavLink
                to="https://wa.me/9779852004024?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.neurohospital.com.np.%20"
                className="media-container"
                onMouseOver={() => setShowWtsp(true)}
                onMouseLeave={() => setShowWtsp(false)}
              >
                <i className="fa-brands fa-whatsapp"></i>
                {showWtsp && <div className="media-content">WhatsApp</div>}
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
