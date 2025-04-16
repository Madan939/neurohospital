import React from "react";
import { Link } from "react-router-dom";

const Float = () => {
  return (
    <div>
      <section className="float-1">
        <Link className="float1-link" to="tel:+97721416267">
        <i className="fa-solid fa-phone text-light"></i>
        </Link>
      </section>
      <section className="float-2">
        <Link className="float2-link" target="_blank" to="https://wa.me/9779852004024?text=Hi%2C%20I%27m%20contacting%20you%20through%20www.neurohospital.com.np.%20">
        <i className="fa-brands fa-whatsapp text-light"></i>
        </Link>
      </section>
    </div>
  );
};

export default Float;
