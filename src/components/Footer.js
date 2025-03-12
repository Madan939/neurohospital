import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className=" mt-3 ">
        <div className="main-footer  mt-3">
          <div className="footer-row row">
            <div className="cols col-md-3 col-sm-12 col-xs-12">
              <NavLink to="">
                <img
                  src="/images/footer-logo.png"
                  alt="footer-logo"
                  className="footer-logo"
                />
              </NavLink>
              <p className="footer-p">
                Providing best healthcare solutions in Biratnagar, Nepal. Asia's
                profesionally managed healthcare solutions.
              </p>
              <div className="footer-media-icons">
                <NavLink to="https://wa.me/9779852004024?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.neurohospital.com.np.%20">
                  <i className="fa-brands fa-whatsapp"></i>
                </NavLink>
                <NavLink to="https://www.linkedin.com/company/neurohospital/?originalSubdomain=np">
                  <i className="fa-brands fa-linkedin"></i>
                </NavLink>
                <NavLink to="https://www.youtube.com/channel/UCGrHL0QQXVu1n-P29xUhmYA">
                  <i className="fa-brands fa-youtube"></i>
                </NavLink>
                <NavLink to="https://www.instagram.com/neurohospitalbrt/">
                  <i className="fa-brands fa-instagram"></i>
                </NavLink>
                <NavLink to="https://www.facebook.com/neurohospitalofficial/">
                  <i className="fa-brands fa-square-facebook"></i>
                </NavLink>
              </div>
            </div>
            <div className="cols col-md-3 col-sm-12 col-xs-12">
              <p className="footer-head">Our Location</p>
              <p>F73M+G94, Jahada Road, Biratnagar, Nepal</p>
              <p>
                E:{" "}
                <Link
                  className="e-link text-dark"
                  to="mailto:info@neurohospital.com.np"
                >
                  info@neurohospital.com.np
                </Link>
              </p>
              <p>
                P:{" "}
                <Link to="tel:+977-21-417475" className="foot-phn">
                  +977-21-417484 / 417475
                </Link>
              </p>
            </div>
            <div className="cols col-md-3 col-sm-12 col-xs-12">
              <p className="footer-head">OPD Hours</p>
              <p>
                Sun-Fri - <b className="text-dark">10:30AM - 05:00PM</b>
              </p>
              <p>
                Saturday - <b className="text-dark">Closed</b>
              </p>
            </div>
            <div className="cols col-lg-2 col-md-2 col-xs-12">
              <p className="footer-head">Toll Free Number</p>
              <p>
                <Link to="tel:1660-21-52777" className="tel-no">
                  1660-21-52777
                </Link>
              </p>
              <Link to="tel:"></Link>
              <p>24X7 Helpline</p>
              <p>
                <Link to="tel:+977-21-416267" className="tel-no">
                  +977-21-416267
                </Link>
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="footer-last text-center">
          <div>
            <div className="container">
              Copyright &copy; 2000-{" "}
              <b className="text-dark">
                Neuro Cardio & Multispeciality Hospital Pvt.Ltd.
              </b>{" "}
              All Rights Reserved
            </div>
            <div className="f-l-cnt text-center ">
              Site Managed By : PRACAS Upreti
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
