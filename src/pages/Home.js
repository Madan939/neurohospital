import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CardSlider from "../components/CardSlider";
import Video from "../components/Video";
import Section_6 from "../components/Section_6";
import Sec8 from "../components/Sec8";

const Home = () => {
  const [homePic, showHomePic] = useState(true);
  const close = () => {
    showHomePic(false);
  };
useEffect(()=>{
  showHomePic(true);
},[]);
  return (
    <>
      {homePic && (
        <div className="overlay">
          <div className="overlay-div">
            <img src="/images/1.jpg" alt="Home" className="overlay-image" />
          </div>
          <button className="close-button" onClick={close}>
            X
          </button>
        </div>
      )}
      <div className="home-bg ">
        <div className="home-1 d-flex">
          <div className="home-1-1">
            <p className="hp1">Neuro Hospital - Biratnagar</p>
            <p className="hp2">Trusted Care</p>
            <p className="hp3">
              We have been the first choice of neurological services since two
              decades in Biratnagar and serving various premium medical
              facilities under a single roof by giving new lives to thousands
            </p>
            <button className="hbtn btn">About Us</button>
          </div>
          <div className="home-1-2">
            <img
              src="/images/homeimage.png"
              alt="home-image"
              className="home-1-pic"
            />
          </div>
        </div>
        <div className="container mt-2">
          <div className="home-row row">
            <div className="col1 col col-md-3">
              <div className="hcard">
                <div className="hcard-f1 h5 mb-3">Hospital Timings</div>
                <div className="hcard-1 d-flex justify-content-between">
                  <div className="fh ">OPD</div>
                  <div className="fs ">-</div>
                  <div className="ft ">10:30 AM - 05:00 PM</div>
                </div>
                <div className="hcard-1 d-flex justify-content-between">
                  <div className="fh ">Saturday</div>
                  <div className="fs ">-</div>
                  <div className="ft ">Closed</div>
                </div>
                <div className=" d-flex justify-content-between">
                  <div className="fh ">Emergency</div>
                  <div className="fs ">-</div>
                  <div className="ft ">24x7 Service</div>
                </div>
              </div>
            </div>
            <div className="col2 col col-md-3 ">
              <div className="hcard">
                <p className="h5 mb-3">Doctors' Team</p>
                <p className="mt-2 mb-3">
                  We have managed our services to ease our patients an easiest
                  way to get emergency, OPD & other essential medical services
                  round the clock.
                </p>
                <Link to="" className="card-btn btn text-light mt-3">
                  View Doctors
                </Link>
              </div>
            </div>
            <div className="col3 col col-md-3 ">
              <div className="hcard">
                <p className="h5 mb-3"> Appointments</p>
                <p className="mb-3 mt-3">
                  You can book an appointment to get connected with your desired
                  doctors.
                </p>
                <Link to="" className="card-btn btn text-light mt-3">
                  Book an Appointment
                </Link>
              </div>
            </div>
            <div className="col4 col col-md-3 ">
              <div className="hcard">
                <p className="h5 mb-3">Emergency Cases</p>
                <Link
                  to="tel:166-021-52777"
                  className="text-decoration-none text-light mt-3 mb-3"
                >
                  <i className="fa-solid fa-phone-flip"></i>&nbsp;166-021-52777
                </Link>
                <p className="mt-3 mb-3">
                  Emergency connectivity over toll free number ( NTC Only ) and
                  WhatsApp.
                </p>
                <Link
                  to="whatsapp:9818869166"
                  className="card-btn btn text-light mt-3"
                >
                  Call on Whatsapp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-1 d-flex">
        <div className="w-50">
          <img src="/images/director.png" alt="director-image" />
        </div>
        <div className="section-1-2div container mt-3">
          <p className="section-1-1p ">SERVING THE HUMANITY</p>
          <p className="section-1-2p">Director's Message</p>
          <p className="mb-3 mt-3">
            Our mission at Neuro Cardio & Multispeciality Hospital Pvt.Ltd. is
            to provide exemplary healthcare, and it is your unwavering
            dedication that allows us to achieve this. As we move forward, I
            want to emphasize the importance of our collective vision, which is
            founded on the principles of clinical excellence, patient-centered
            care, and continuous innovation.
          </p>
          <p className="mb-3 mt-3">
            In the ever-evolving landscape of healthcare, it is essential that
            we embrace change and harness the power of innovation to improve
            patient outcomes and experiences. We must remain at the forefront of
            medical advances, ensuring that our patients receive the best care
            possible.
          </p>
          <p className="text-dark mt-3">Dr. Anisha Bista, Executive Director</p>
          <Link
            to="mailto:anisha.bista@neurohospital.com.np"
            className="section-1-btn btn mt-3"
          >
            anisha.bista@neurohospital.com.np
          </Link>
        </div>
      </div>
      <div className="slider-container">
        <div className="slide-p1 text-center">Optimum Caring</div>
        <CardSlider />
      </div>
      <div className="section-3">
        <div className="sec-3-content row">
          <div className="col col-1"></div>
          <div className="col col-5  text-secondary">
            <p className="sec-3-p1">Best Practices</p>
            <p className="sec-3-p2">Premium Medical Facilities</p>
            <p className="sec-3-p3">
              To provide a safe and efficient environment to patients, staff,
              and visitors routine inspections are one of the hospital facility
              management’s key activities that are performed to find and address
              any problem areas inside and outside of healthcare facilities,
              such as:
            </p>
            <div className="sec-3-2row row">
              <div className="sec-3-2col col col-6">
                <div>
                  <i class="fa-solid fa-angles-right"></i>&nbsp; Trauma Care
                </div>
                <div>
                  <i class="fa-solid fa-angles-right"></i>&nbsp; Intensive Care
                  Unit
                </div>
                <div>
                  <i class="fa-solid fa-angles-right"></i>&nbsp;Ventilator
                </div>
              </div>
              <div className="sec-3-2col col col-6">
                <div>
                  <i class="fa-solid fa-angles-right"></i>&nbsp; Stroke Care
                </div>
                <div>
                  <i class="fa-solid fa-angles-right"></i>&nbsp; Heart Attack
                  Care
                </div>
                <div>
                  <i class="fa-solid fa-angles-right"></i>&nbsp;Knee/ Hip
                  Replacement
                </div>
              </div>
            </div>
          </div>
          <div className="col col-6">
            <img src="/images/sec-3-1.png" alt="" className="sec-3-img" />
          </div>
        </div>
      </div>
      <div className="section-4 ">
        <div className="sec-4-row d-flex">
          <div className="sec-4-col1">
            <img src="/images/sec-4-img.jpg" alt="" className="sec-4-img" />
          </div>
          <div className="sec-4-col2 ">
            <div className=" sec-4-col2-div  text-light">
              <div className="sec-4-1">Experienced Doctors</div>
              <p className="sec-4-2">World Class Treatment</p>
              <p>
                I feel proud to become a team member of professionally managed
                healthcare services in Nepal. Our hospital provides world class
                healthcare solutions for them whose last lifeline is "Neuro
                Hospital-Biratnagar".
              </p>
              <p>
                We have been serving local & international patients under single
                roof as being the best neuro hospital in Nepal.
              </p>
              <p>Life Matters !</p>
              <p className="sec-4-5">Dr. Vivek Kattel | Consultant Physician</p>
              <Link
                className="text-decoration-none text-light"
                to="mailto:drkattel@neurohospital.com.np"
              >
                drkattel@neurohospital.com.np
              </Link>
              <br />
              <Link className="sec-4-btn btn text-light">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section-5">
      <div className="section-5-content">
        <div className="sec-5-1"></div>
        <div className="sec-5-2 ">
          <p className="sec-5-p1">Highest Quality Care</p>
          <p className="sec-5-p2">Solutions to Complex Medical Problems</p>
          <ul className="sec-5-ul">
            <li>Analyze—Understand the root cause.</li>
            <li>Plan—Determine how to resolve the problem.</li>
            <li>Implement—Put the resolution in place.</li>
            <li>
              Evaluate—Determine if the resolution is producing the desired
              results.
            </li>
          </ul>
        </div>
        <div className="sec-5-3 ">
          <div className="sec-5-3-div">
           <Video/>
          </div>        
        </div>
      </div>
      </div>
      <div className="section-6 ">
        <Section_6/>
      </div>
      <div className="section-7">
        <div className="sec-7-div">
          <p className="sec7-p1">World Class Equipments</p>
          <p className="sec7-p2">Magnetic resonance imaging is a medical imaging technique used in radiology to form pictures of the anatomy and the physiological processes of the body. MRI scanners use strong magnetic fields, magnetic field gradients, and radio waves to generate images of the organs in the body.</p>
          <NavLink to="" className="sec7-btn btn text-light">Book an Appointment</NavLink>
        </div>
      </div>
      <div className="section-8">
        <div className="sec8-div">
          <p className="sec8-p text-center">Hospital Updates</p>
            <Sec8/>
        </div>
      </div>
    </>
  );
};
export default Home;
