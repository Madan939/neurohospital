import React, { useEffect, useRef, useState } from "react";

const Dpsection2 = () => {
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
      { threshold: 0.1 }
    );
    if (sec2Element) observer2.observe(sec2Element);
    return () => {
      if (sec2Element) observer2.unobserve(sec2Element);
    };
  }, []);
  const list = [
    {
      name: "Neurology",
      img: "/assets/images/department/dp9.png",
      des: "The specialty of neurosurgical care includes both adult and pediatric patients.",
    },
    {
      name: "Cardiology",
      img: "/assets/images/department/dp5.png",
      des: " Cardiology is a branch of medicine that concerns diseases and disorders of the heart.",
    },
    {
      name: "Obs & Gynaecology",
      img: "/assets/images/department/dp3.png",
      des: "Obstetrics means care during pregnancy, childbirth, and the postpartum period.",
    },
    {
      name: "Hematology",
      img: "/assets/images/department/dp10.png",
      des: "Hematology is the branch of medicine with the study of the blood and blood disorders.",
    },
    {
      name: "General Medicine",
      img: "/assets/images/department/dp11.png",
      des: "Speciality of medicine which is involved in the prevention, diagnosis & treatment.",
    },
    {
      name: "Nephrologyl",
      img: "/assets/images/department/dp12.png",
      des: "Nephrology is a specialty within the internal medicine field related to kidney care.",
    },
    {
      name: "Gastroenterology",
      img: "/assets/images/department/dp13.png",
      des: "The branch of medicine focused on the digestive system and its disorders.",
    },
    {
      name: "Opthalmology",
      img: "/assets/images/department/dp14.png",
      des: "Ophthalmology is the specialized field of medicine that focuses on the health of the eye.",
    },
    {
        name: "Dermatology",
        img: "/assets/images/department/dp15.png",
        des: "The study, research, diagnosis, and management of any health conditions affect the skin. ",
      },
      {
        name: "Pediatrics",
        img: "/assets/images/department/dp16.png",
        des: "Branch of medicine dealing with the medical care of infants, children, and adolescents.",
      },
      {
        name: "Psychiatric",
        img: "/assets/images/department/dp1.png",
        des: "Branch of medicine focused on the diagnosis, treatment and prevention of mental health.",
      },
      {
        name: "Oncology",
        img: "/assets/images/department/dp17.png",
        des: "Medicine dedicated to the investigation, diagnosis and treatment of people with cancer.",
      },
      {
        name: "Family Medicine",
        img: "/assets/images/department/dp18.png",
        des: "Qualified to treat most ailments and provide comprehensive health care for people.",
      },

    
  ];
  return (
    <div className="dps2-div">
      <div className="dps2-p1">Medical</div>
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

export default Dpsection2;
