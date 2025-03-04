import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [homePic, showHomePic] = useState(true);
  const close = () => {
    showHomePic(false);
  };
  const cards = [
    {
      id: 1,
      img: "/images/sl1.png",
      name: "NEUROLOGY",
      description:
        "The branch of medicine concerned with the study and treatment of disorders of the nervous system. It is acomplex system that regulates and coordinates body activities",
    },
    {
      id: 2,
      img: "/images/sl2.png",
      name: "NEUROSURGERY",
      description:
        "The branch of medicine concerned with the study and treatment of disorders of the nervous system. It is a complex system that regulates and coordinates body activities.",
    },
    {
      id: 3,
      img: "/images/sl3.png",
      name: "CARDIOLOGY",
      description:
        "A branch of medicine that uses imaging technology to diagnose and treat disease. Radiology may be divided into two different areas, diagnostic radiology and interventional radiology.",
    },
    {
      id: 4,
      img: "/images/sl4.png",
      name: "ORTHOPEDIC",
      description:
        "An X-ray, also called a radiograph, sends radiation through the body. Areas with high levels of calcium (bones and teeth) block the radiation, causing them to appear white on the image.",
    },
    {
      id: 5,
      img: "/images/sl5.png",
      name: "GENERAL SURGERY",
      description:
        " Medical specialty dealing with the diagnosis and treatment of diseases and abnormalities involving the heart and blood vessels. Cardiology is a medical, not surgical, discipline. ",
    },
    {
      id: 6,
      img: "/images/sl6.png",
      name: "PEDIATRICS",
      description:
        "It is a noninvasive medical imaging test that produces detailed images of almost every internal structure in the human body, including the organs, bones, muscles and blood.",
    },
    {
      id: 7,
      img: "/images/sl7.png",
      name: "GYNECOLOGY",
      description:
        "It is the branch of medicine dealing with the skin. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, cosmetic problems.",
    },
    {
      id: 8,
      img: "/images/sl8.png",
      name: "NEPHROLOGY",
      description:
        " It comprises of both medicine as well as surgical fields. While many of the it illnesses need hormonal and other pharmacological management, cancers, fibroids etc.",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const totalCards = cards.length;
  const visibleCards = 4;
  const getVisibleCards = () => {
    const endIndex = startIndex + visibleCards;
    return endIndex > totalCards
      ? [
          ...cards.slice(startIndex, totalCards),
          ...cards.slice(0, endIndex - totalCards),
        ]
      : cards.slice(startIndex, endIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [startIndex]);
  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };
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
          <div className=" w-50">
            <p className="hp1">Neuro Hospital - Biratnagar</p>
            <p className="hp2">Trusted Care</p>
            <p className="hp3">
              We have been the first choice of neurological services since two
              decades in Biratnagar and serving various premium medical
              facilities under a single roof by giving new lives to thousands
            </p>
            <button className="hbtn btn">About Us</button>
          </div>
          <div className=" w-50">
            <img src="/images/homeimage.png" alt="home-image" />
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
      <div className="section border">
        <div className="section-2">
          <p className="sec-2-p1 text-center h3">Optimum Caring</p>
          <div className="slider-container">
            <div className="card-wrapper text-center">
              {getVisibleCards().map((card) => (
                <div key={card.id} className="card">
                  <img src={card.img} className="sec-2sl-img" alt="" />
                  <p className="card-name">{card.name}</p>
                  <p className="text-secondary m-2">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <button className='prev' onClick={prevSlide}>
              o
            </button>
            <button className="next" onClick={nextSlide}>
              o
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
