import React, { useEffect, useRef, useState } from "react";

const DpSectiion1 = () => {
  const sec2Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const sec2Element = sec2Ref.current;
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer2.unobserve(sec2Element);
        }
      },
      { threshold: 0.5 }
    );
    if (sec2Element) observer2.observe(sec2Element);
    return () => {
      if (sec2Element) observer2.unobserve(sec2Element);
    };
  }, []);
  const list = [
    {
      name: "Neurosurgery",
      img: "/assets/images/department/dp1.png",
      des: "The specialty of neurosurgical care includes both adult and pediatric patients.",
    },
    {
      name: "Orthopedic",
      img: "/assets/images/department/dp2.png",
      des: " Focuses on injuries and diseases of your body's musculoskeletal system.",
    },
    {
      name: "Obs & Gynaecology",
      img: "/assets/images/department/dp3.png",
      des: "Obstetrics means care during pregnancy, childbirth, and the postpartum period.",
    },
    {
      name: "GI Surgery",
      img: "/assets/images/department/dp4.png",
      des: "It means to treat benign (noncancerous) conditions that affect the digestive tract.",
    },
    {
      name: "ENT",
      img: "/assets/images/department/dp5.png",
      des: "Specializes in everything having to do with parts of the body (ear, nose, and throat).",
    },
    {
      name: "Dental",
      img: "/assets/images/department/dp6.png",
      des: "The branch of medicine focused on the teeth, gums, and mouth is Known as Dental.",
    },
    {
      name: "Urology",
      img: "/assets/images/department/dp7.png",
      des: "Urology is a part of health care that deals with diseases of the male and female urinary tract.",
    },
    {
      name: "Interventional Cardiology",
      img: "/assets/images/department/dp8.png",
      des: "Specialty that diagnoses and treats heart and blood vessel conditions using small tubes.",
    },
  ];
  return (
    <div className="dps2-div">
      <div className="dps2-p1">Surgical</div>
      <div
        ref={sec2Ref}
        className={`dps2-row w-100  ${isVisible ? "show" : ""}`}
      >
        {list.map((item) => (
          <div className="dps2-col">
            <div className="dps2-col-cnt d-flex">
              <div className="dps2-col-cnt1 ">
                <img src={item.img} alt={item.name} className="w-100 h-100" />
              </div>
              <div className="dps2-col-cnt2">
                <div className="dsct-2-p1">{item.name}</div>
                <div className="dsct-2-p2">{item.des}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DpSectiion1;
