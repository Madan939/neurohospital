import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav_2 = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showDept, setShowDept] = useState(false);
  const [showBrowse, setShowBrowse] = useState(false);

  return (
    <>
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

            <div
              className="dropdown-container"
              onMouseEnter={() => setShowAbout(true)}
              onMouseLeave={() => setShowAbout(false)}
            >
              <NavLink to="#" className="nav-links">
                About&nbsp;<i className="fa-solid fa-caret-down"></i>
              </NavLink>
              {showAbout && (
                <div className="dropdown-content">
                  <div className="About-content">
                    <div>About Us</div>
                    <div>Messages</div>
                    <div>Partners Organization</div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="dropdown-container"
              onMouseEnter={() => setShowDept(true)}
              onMouseLeave={() => setShowDept(false)}
            >
              <NavLink to="#" className="nav-links">
                Departments&nbsp;<i className="fa-solid fa-caret-down"></i>
              </NavLink>
              {showDept && (
                <div className="dropdown-content">
                  <div className="dept-content">
                    <div className=" dept-row row">
                      <div className="col col-3">
                        <p className="dept-p1">Surgical</p>
                        <p className="dept-p2">Neurosurgery</p>
                        <p className="dept-p2">Orthopedic</p>
                        <p className="dept-p2">Obs & Gynocology</p>
                        <p className="dept-p2">GI Surgery</p>
                        <p className="dept-p2">ENT</p>
                        <p className="dept-p2">Dental</p>
                        <p className="dept-p2">Urology</p>
                        <p className="dept-p3">Interventional Cardiology</p>
                      </div>
                      <div className="col col-3">
                        <p className="dept-p1">Medical</p>
                        <p className="dept-p2">Neurology</p>
                        <p className="dept-p2">Cardiology</p>
                        <p className="dept-p2">General Medicine</p>
                        <p className="dept-p2">Nephrology</p>
                        <p className="dept-p2">Gastroenterology</p>
                        <p className="dept-p2">Ophthalmology</p>
                        <p className="dept-p2">Dermatology</p>
                        <p className="dept-p2">Pediatrics</p>
                        <p className="dept-p2">Psychiatric</p>
                        <p className="dept-p2">Oncology</p>
                        <p className="dept-p3">Family Medicine</p>
                      </div>
                      <div className="col col-3">
                        <p className="dept-p1">Diagnostics</p>
                        <p className="dept-p2">Radiology</p>
                        <p className="dept-p2">Pathology</p>
                        <p className="dept-p2">Endoscopy</p>
                        <p className="dept-p2">ABPM/Holter/ECG</p>
                        <p className="dept-p3">ECG/NCS/EMV</p>
                      </div>
                      <div className="col col-3">
                        <p className="dept-p1">Other</p>
                        <p className="dept-p2">Emergency</p>
                        <p className="dept-p3">Pharmacy</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="#" className="nav-links">
              Doctors
            </NavLink>
            <NavLink to="#" className="nav-links">
              Academics
            </NavLink>

            <div
              className="dropdown-container"
              onMouseEnter={() => setShowBrowse(true)}
              onMouseLeave={() => setShowBrowse(false)}
            >
              <NavLink to="#" className="nav-links">
                Browse More&nbsp;<i className="fa-solid fa-caret-down"></i>
              </NavLink>
              {showBrowse && (
                <div className="dropdown-content">
                  <div className="browse-div">
                    <div className="browse-row row">
                      <div className="browse-col col col-6">
                        <Link to="/">
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
                </div>
              )}
            </div>

            <NavLink to="#" className="nav-links">
              Contact
            </NavLink>
            <NavLink to="#" className="btn btn-primary btn-sm text-sm">
              Book an Appointment
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav_2;
