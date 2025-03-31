import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import DtSection from "../components/DtSection";

const Doctor = () => {
  useEffect(()=>{
    document.title="Neuro Hospital | doctors";
  },[]);
  const name1 = "Meet the Doctors";
  const name2 = "Doctors";

  return (
    <>
      <Breadcrumb name1={name1} name2={name2} />
      <div className="doctor">
      <div className="dct-sec-1">
        <div className="dct-sec-1-div">
          <div className="dcts1-1 text-center">
            <img src={"/assets/images/doctors/dc1.png"} alt="dc1" />
            <div className="dcts-1-p1">Dr. Birendra Kumar Bista</div>
            <div className="dcts-1-p2">Senior Consultant Neurologist</div>
            <Link className="dcts-btn btn">NMC # : 1636</Link>
          </div>
          <div className="dcts1-1 text-center">
            <img src={"/assets/images/doctors/dc2.png"} alt="dc1" />
            <div className="dcts-1-p1">Prof. Dr. Navin Kumar Karna</div>
            <div className="dcts-1-p2">
              Senior Consultant Orthopedic Surgeon
            </div>
            <Link className="dcts-btn btn">NMC # : 3103</Link>
            <br/>
          </div>
        </div>
      </div>
      <div className="dct-sec-2">
        <div className="dct-sec-2-1">
            <DtSection/>
        </div>
      </div>
      </div>
    </>
  );
};

export default Doctor;
