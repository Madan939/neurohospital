import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showDept, setShowDept] = useState(false);
  const [showBrowse, setShowBrowse] = useState(false);
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
                onMouseOver={() => setShowFb(true)}
                onMouseLeave={() => setShowFb(false)}
              >
                <i className="fa-brands fa-square-facebook"></i>
              </NavLink>
              <NavLink
                to="#"
                onMouseOver={() => setShowInst(true)}
                onMouseLeave={() => setShowInst(false)}
              >
                <i className="fa-brands fa-instagram"></i>
              </NavLink>
              <NavLink
                to="#"
                onMouseOver={() => setShowYt(true)}
                onMouseLeave={() => setShowYt(false)}
              >
                <i className="fa-brands fa-youtube"></i>
              </NavLink>
              <NavLink
                to="#"
                onMouseOver={() => setShowLdn(true)}
                onMouseLeave={() => setShowLdn(false)}
              >
                <i className="fa-brands fa-linkedin"></i>
              </NavLink>
              <NavLink
                to="#"
                onMouseOver={() => setShowWtsp(true)}
                onMouseLeave={() => setShowWtsp(false)}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="nav-2 shadow">
          <div className="nav-2-content d-flex justify-content-between">
            <div>
              <NavLink to="/">
                <img
                  src="/images/header-logo.png"
                  alt="header-logo"
                  className="header-logo"
                />
              </NavLink>
            </div>
            <div className="nav-2-second">
              <NavLink to="/" className="nav-links">
                Home
              </NavLink>
              <NavLink
                to="#"
                onMouseOver={() => setShowAbout(true)}
                onMouseLeave={() => setShowAbout(false)}
                className="nav-links"
              >
                About&nbsp;
                <i className="fa-solid fa-caret-down"></i>
              </NavLink>
              <NavLink
                to="#"
                className="nav-links"
                onMouseOver={() => setShowDept(true)}
                onMouseLeave={() => setShowDept(false)}
              >
                Departments&nbsp;
                <i className="fa-solid fa-caret-down"></i>
              </NavLink>
              <NavLink to="#" className="nav-links">
                Doctors
              </NavLink>
              <NavLink to="#" className="nav-links">
                Academics
              </NavLink>
              <NavLink
                to="#"
                className="nav-links"
                onMouseOver={() => setShowBrowse(true)}
                onMouseLeave={() => setShowBrowse(false)}
              >
                Browse More&nbsp;
                <i className="fa-solid fa-caret-down"></i>
              </NavLink>
              <NavLink to="#" className="nav-links">
                Contact
              </NavLink>
              <NavLink to="#" className="btn btn-primary btn-sm text-sm">
                Book an Appointment
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className={`About-content ${showAbout ? "show" : ""}`}
          onMouseOver={() => setShowAbout(true)}
          onMouseLeave={() => setShowAbout(false)}
        >
          <div>About Us</div>
          <div>Messages</div>
          <div>Partners Organization</div>
        </div>
        <div
          className={`dept-content ${showDept ? "show" : ""}`}
          onMouseOver={() => setShowDept(true)}
          onMouseLeave={() => setShowDept(false)}
        >
          <div className="dept-row row">
            <div className="col col-3">
              <h5>Surgical</h5>
              <p>Neurosurgery</p>
              <p>Orthopedic</p>
              <p>Obs & Gynocology</p>
              <p>GI Surgery</p>
              <p>ENT</p>
              <p>Dental</p>
              <p>Urology</p>
              <p>Interventional Cardiology</p>
            </div>
            <div className="col col-3">
              <h5>Medical</h5>
              <p>Neurology</p>
              <p>Cardiology</p>
              <p>General Medicine</p>
              <p>Nephrology</p>
              <p>Gastroenterology</p>
              <p>Ophthalmology</p>
              <p>Dermatology</p>
              <p>Pediatrics</p>
              <p>Psychiatric</p>
              <p>Oncology</p>
              <p>Family Medicine</p>
            </div>
            <div className="col col-3">
              <h5>Diagnostics</h5>
              <p>Radiology</p>
              <p>Pathology</p>
              <p>Endoscopy</p>
              <p>ABPM/Holter/ECG</p>
              <p>ECG/NCS/EMV</p>
            </div>
            <div className="col col-3">
              <h5>Other</h5>
              <p>Emergency</p>
              <p>Pharmacy</p>
            </div>
          </div>
        </div>
        <div
          className={`browse-content ${showBrowse ? "show" : ""}`}
          onMouseOver={() => setShowBrowse(true)}
          onMouseLeave={() => setShowBrowse(false)}
        >
          <div className=" row">
            <div className="browse-col col col-6">
              <Link to="#">
                {" "}
                <div>Gallery</div>
              </Link>
              <Link to="#">
                <div>Testimonials</div>
              </Link>
              <Link to="#">
                <div>Location Map</div>
              </Link>
            </div>
            <div className="browse-col col col-6">
              <Link to="#">
                <div>Privacy Policy</div>
              </Link>
              <Link to="#">
                <div>Hospital Calendar</div>
              </Link>
              <Link to="#">
                <div>Career</div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`facebook ${showFb ? "show" : ""}`}
          onMouseOver={() => setShowFb(true)}
          onMouseLeave={() => setShowFb(false)}
        >
          Facebook
        </div>
        <div
          className={`instagram ${showInst ? "show" : ""}`}
          onMouseOver={() => setShowInst(true)}
          onMouseLeave={() => setShowInst(false)}
        >
          Instagram
        </div>
        <div
          className={`youtube ${showYt ? "show" : ""}`}
          onMouseOver={() => setShowYt(true)}
          onMouseLeave={() => setShowYt(false)}
        >
          Youtube
        </div>
        <div
          className={`linkedin ${showLdi ? "show" : ""}`}
          onMouseOver={() => setShowLdn(true)}
          onMouseLeave={() => setShowLdn(false)}
        >
          Linkedin
        </div>
        <div
          className={`whatsapp ${showWtsp ? "show" : ""}`}
          onMouseOver={() => setShowWtsp(true)}
          onMouseLeave={() => setShowWtsp(false)}
        >
          Whatsapp
        </div>
     
      </header>
    </>
  );
};

export default Header;
