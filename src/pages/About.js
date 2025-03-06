import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import Video from "../components/Video";
import AboutCpnt from "../components/AboutCpnt";

const About = () => {
  const name = "About Us";
  const img = "/images/abu3.png";
  const url = "https://www.youtube.com/watch?v=WYN_vQ-PdH4";
  return (
    <>
      <Breadcrumb name={name} />
      <div className="abu-sec1">
        <div className="ab-sec1-cnt d-flex">
          <div className="ab-sec1-cnt-1">
            <img src="/images/ab1.png" alt="ab1" />
          </div>
          <div className="ab-sec1-cnt-2">
            <div className="ab-sec1-cnt-2-1">
              <p className="abu-p1">Welcome to Nepal's Best Neuro Hospital</p>
              <p className="abu-p2">We trust in Service</p>
              <p className="abu-p3">
                Life matters a lot, and we do care for them with our dedication
                towards our duty and as a nation where we feel proud of
                providing the best neurological services as a team of the best
                doctors in Nepal.
              </p>
              <p className="abu-p3">
                Neuro Cardio & Multispecialty Hospital Pvt.Ltd. is a well-known
                multispecialty hospital that was established in 2000 AD to
                provide the best neurological and other medical facilities.
              </p>
              <div className="abu-p4">Dr. Birendra Kumar Bista</div>
              <div className="abu-p5">Senior Consultant Neurologist</div>
              <Link to="https://neuro.danphecare.com/" className="abu-btn btn">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="abu-sec2">
        <div className="abu-sec2-cnt d-flex">
          <div className="abu-sec2-cnt1 w-50">
            <div className="abu-s2ct-1div">
              <div className="s2ct-p1">Highest Quality Care</div>
              <div className="s2ct-p2">
                Complete Medical Solutions in One Place
              </div>
              <div className="s2ct-p3">
                Medical solutions rank amongst the most exciting and interesting
                ways healthcare providers leverage digital technology to improve
                medical care. They have the potential to transform healthcare
                provision as we know it, improving access, clinical outcomes and
                engagement with services.
              </div>
              <div className="s2ct-p4 d-flex">
                <div className="w-50">
                  <div>
                    <i class="fa-solid fa-angles-right"></i>Service optimisation
                  </div>
                  <div>
                    <i class="fa-solid fa-angles-right"></i>Cost-efficiency
                  </div>
                  <div>
                    <i class="fa-solid fa-angles-right"></i>Engagement medical
                    care
                  </div>
                </div>
                <div className="w-50">
                  <div>
                    <i class="fa-solid fa-angles-right"></i>Accessibility
                  </div>
                  <div>
                    <i class="fa-solid fa-angles-right"></i>Improved
                    communication
                  </div>
                  <div>
                    <i class="fa-solid fa-angles-right"></i>Personalised
                    healthcare
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="abu-sec2-cnt2 w-50">
            <img src="/images/abu2.jpg" alt="abu2" />
          </div>
        </div>
      </div>
      <div className="abu-sec3">
        <div className="abu-sec3-div1">
          <div className="abu-sec3-div1-1">
            <img src="/images/cardiogram.png" alt="bed" className="flat-icon" />
            <p className="abs3-p1 text-light h3 text-bold">100000</p>
            <p className="abs3-p2">Plus Happy Patients</p>
          </div>
          <div className="abu-sec3-div1-1">
            <img src="/images/doctor.png" alt="bed" className="flat-icon" />
            <p className="abs3-p1 text-light h3 text-bold">31</p>
            <p className="abs3-p2">Qualified Doctors</p>
          </div>
          <div className="abu-sec3-div1-1">
            <img src="/images/bed.png" alt="bed" className="flat-icon" />
            <p className="abs3-p1 text-light h3 text-bold">150</p>
            <p className="abs3-p2">Beds</p>
          </div>
          <div className="abu-sec3-div1-1">
            <img src="/images/location.png" alt="bed" className="flat-icon" />
            <p className="abs3-p1 text-light h3 text-bold">473</p>
            <p className="abs3-p2">Referring Center</p>
          </div>
        </div>
      </div>
      <div className="abu-sec4">
        <div className="abs4-cnt">
          <div className="abs4-cnt1">
            <Video img={img} url={url} />
          </div>
          <div className="abs4-cnt2">
            <div className="abs4-cnt2-cnt">
              <div className="abs4ct2cnt1">Modern Medicine</div>
              <div className="abs4ct2cnt2">World Class Equipments</div>
              <div className="abs4ct2cnt3">
                We need to be prepared for anything that might come through the
                doors. That’s why keeping key pieces of medical equipment
                on-hand at all times are so crucial to providing complete care.{" "}
              </div>
              <div className="abs4ct2cnt4">
                In order to provide comprehensive treatment for patients, we
                have a standard set of equipment that all hospitals should have
                it.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abu-sec5">
        <div className="abs5-cnt">
          <div className="abs5-cnt1">
            <AboutCpnt />
          </div>
          <div className="abs5-cnt2">
            <div className="abs5c21">
              <p className="abs5-p1">Opening Hours</p>
              <p className="abs5-p2">
                Major services are round the clock services at our hospital. OPD
                and other free counselling has handpicked hours mentioned below.
              </p>
              <p className="abs5-p3">
                Please book your appointment with our Appointment Booking
                System.
              </p>
              <div className="adiv1 d-flex">
                <div className="d1">Sun-Fri</div>
                <div className="d2">-</div>
                <div className="d3">10:30 AM - 05:00 PM</div>
              </div>
              <div className="adiv2 d-flex">
                <div className="d1">Emergency</div>
                <div className="d2">-</div>
                <div className="d3">24 Hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abu-sec6">
        <div className="abs6-cnt text-center">
          <p className="abs6-p1">
          Experienced Doctors
          </p>
          <p className="abs6-p2">
          Team of Nepal's best doctors to provide round the clock services to the patients from Nepal, Bangladesh, India, Bhutan etc.
          </p>
          <Link to="" className="abs6-btn btn">View Doctors Team</Link>
        </div>
      </div>
    </>
  );
};

export default About;
