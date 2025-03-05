import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [showFb, setShowFb] = useState(false);
  const [showInst, setShowInst] = useState(false);
  const [showWtsp, setShowWtsp] = useState(false);
  const [showYt, setShowYt] = useState(false);
  const [showLdi, setShowLdn] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="nav-1 d-flex">
          <div className="nav-1-content d-flex justify-content-between">
            <div className="nav-1-first d-flex">
              <NavLink to="#">
                <i className="fa-solid fa-location-dot"></i>&nbsp; F73M+G94,
                Jahada Road, Biratnagar
              </NavLink>
              <NavLink to="#">
                <i className="fa-solid fa-phone-flip"></i>&nbsp; +977-21-416267
              </NavLink>
              <NavLink to="#">
                <i className="fa-solid fa-envelope"></i>&nbsp; Check Email
              </NavLink>
            </div>
            <div className="nav-1-second d-flex">
              <NavLink
                to="#"
                className="media-container"
                onMouseOver={() => setShowFb(true)}
                onMouseLeave={() => setShowFb(false)}
              >
                <i className="fa-brands fa-square-facebook"></i>
                {showFb && <div className="media-content">Facebook</div>}
              </NavLink>

              <NavLink
                to="#"
                className="media-container"
                onMouseOver={() => setShowInst(true)}
                onMouseLeave={() => setShowInst(false)}
              >
                <i className="fa-brands fa-instagram"></i>
                {showInst && <div className="media-content">Instagram</div>}
              </NavLink>
              <NavLink
                to="#"
                className="media-container"
                onMouseOver={() => setShowYt(true)}
                onMouseLeave={() => setShowYt(false)}
              >
                <i className="fa-brands fa-youtube"></i>
                {showYt && <div className="media-content">Youtube</div>}
              </NavLink>
              <NavLink
                to="#"
                className="media-container"
                onMouseOver={() => setShowLdn(true)}
                onMouseLeave={() => setShowLdn(false)}
              >
                <i className="fa-brands fa-linkedin"></i>
                {showLdi && <div className="media-content">LinkedIn</div>}
              </NavLink>
              <NavLink
                to="#"
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
