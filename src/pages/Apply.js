import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { NavLink } from "react-router-dom";

const Apply = () => {
  const name = "Apply Now";
  useEffect(()=>{
    document.title="Neuro Hospital | apply";
  },[]);
  return (
    <>
      <Breadcrumb name1={name} name2={name} />
      <div className="apply">
        <div className="apply-row row ">
          <div className="cols col-md-8 col-sm-12">
            <p className="text-center apply-p1 m-2">Fill up the forms to apply now.</p>
            <br/><br/>
            <form className="shadow my-3">
              <div className="my-4 mx-5">
                <img src="/assets/images/apply/logo.svg" alt="sriyog" className="w-25"/>
              </div>
              <div className="mx-5 my-4">
                <label HTMLFor="exampleInputEmail1" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mx-5 my-4">
                <div className="row">
                  <div className="cols col-md-6 col-sm-12">
                    <label HTMLFor="first-name" className="form-label">
                      First Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="first-name"
                    />
                  </div>
                  <div className="cols col-md-6 col-sm-12">
                    <label HTMLFor="last-name" className="form-label">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="last-name"
                    />
                  </div>
                </div>
              </div>
              <div className="mx-5 my-4">
                <div className="row">
                  <div className="cols col-md-6 col-sm-12">
                    <label HTMLFor="phone" className="form-label">
                      Phone:
                    </label>
                    <div className="row">
                      <div className="col col-4">
                        {" "}
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          value="+977"
                          disabled
                        />
                      </div>
                      <div className="col col-8">
                        {" "}
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cols col-md-6 col-sm-12">
                    <label HTMLFor="address" className="form-label">
                      Address:
                    </label>
                    <input type="text" className="form-control" id="address" />
                  </div>
                </div>
              </div>
              <div className="mx-5 my-4">
                <label
                  HTMLFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="mx-5 my-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" HTMLFor="exampleCheck1">
                  All details are true
                </label>
              </div>
              <div className="text-center mx-5 my-2">
                <button type="submit " className="w-50 btn apply-btn my-2 ">
                  Apply details
                </button>
              </div>
            </form>
          </div>
          <div className="cols col-md-4 col-sm-12 shadow ">
            <p className="apply-p2">Welcome !</p>
            <hr />
            <div className="row apply-row-2">
              <div className="col col-5">
                <img
                  src="/assets/images/apply/ap-1.jpg"
                  alt="apply-image"
                  className="w-100 h-auto"
                />
              </div>
              <div className="col col-7">
                <div className="apply-p3">Isha ( 24X7 Helpline )</div>
                <div className="apply-p4">FreshDesk AI</div>
                <div className="apply-p5">166-021-52777</div>
              </div>
            </div>
            <p>
              I'm glad to welcome you at one of the top Neuro Hospital of Nepal
              which is in Biratnagar.
            </p>
            <NavLink
              to="https://neuro.danphecare.com/"
              className="nav-2-btn btn text-sm"
            >
              Book an Appointment
            </NavLink>
            <div className="apply-cnt">
              <div className="apply-cnt-div">
                <p className="abs5-p1 text-light">Opening Hours</p>
                <p className="text-light">
                  Major services are round the clock services at our hospital.
                  PD and other free counselling has handpicked hours mentioned
                  below.{" "}
                </p>
                <div className="a-div1 d-flex">
                  <div className="d1 text-light">Sun - Thurs</div>
                  <div className="d2 text-light">-</div>
                  <div className="d3 text-light">9:00 AM - 06:00 PM</div>
                </div>
                <div className="a-div2 d-flex">
                  <div className="d1 text-light">Friday</div>
                  <div className="d2 text-light">-</div>
                  <div className="d3 text-light">9:00 AM - 03:00 PM</div>
                </div>
                <div className="a-div2 d-flex">
                  <div className="d1 text-light">Saturday</div>
                  <div className="d2 text-light">-</div>
                  <div className="d3 text-light">9:00 AM - 09:00 PM</div>
                </div>
                <div className="a-div3 d-flex">
                  <div className="d1 text-light">Blood Bank</div>
                  <div className="d2 text-light">-</div>
                  <div className="d3 text-light">7:00 AM - 07:00 PM</div>
                </div>
                <div className="abs5-p1 text-light">Looking for Care ?</div>
                <div className="text-light">
                  People living in abroad and looking care for their parents in
                  Nepal can book "Onsite Care Assistance" package.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
