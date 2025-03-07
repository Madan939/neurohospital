import React from "react";

const AboutCpnt = () => {
  const list = [
    {
      name: "Professional Team",
      des: " Team-based model requires with a new way of thinking about hospital responsibilities and leadership.",
      icon: "/images/aboutus/au1.png",
    },
    {
      name: "Modern Equipment",
      des: " Structural elements, mechanisms and control components and include interfaces for convenient use.",
      icon: "/images/aboutus/dp7.png",
    },
    {
      name: "Premium Care",
      des: "Receive exclusive benefits in a relaxing environment with priority access and appointments to suit your lifestyle",
      icon: "/images/aboutus/au2.png",
    },
    {
      name: "Emergency Care",
      des: "  We provide services for the public organizations whose job is to take quick action to deal with emergencies when it occur. ",
      icon: "/images/aboutus/au3.png",
    },
    {
      name: "24 Hrs Services",
      des: " 24-hour emergency line/helpline/hotline. Responding to market pressure, they are offering 24-hour free telephone access.",
      icon: "/images/aboutus/au4.png",
    },
    {
      name: "Home Service",
      des: " Home Services means performance of or assistance with functions and activities related to housing, personal care and attendance.",
      icon: "/images/aboutus/au5.png",
    },
  ];
  return (
    <>
      <div className="abu-row row">
        {list.map((item) => (
          <div className="abu-col col col-md-5">
            <div className="abu-col-div d-flex">
              <div className="abucol-1">
                <img src={item.icon} alt="item.name"/>
              </div>
              <div className="abucol-2">
                <div className="abcl-2-1">{item.name}</div>
                <div className="abcl-2-2">{item.des}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutCpnt;
