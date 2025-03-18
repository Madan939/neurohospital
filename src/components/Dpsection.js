import React, { useEffect, useRef, useState } from "react";

const Dpsection = () => {
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
      name: "Radiology",
      img: "/assets/images/department/dp19.png",
      des: "A branch of medicine that uses imaging technology to diagnose and treat disease.",
    },
    {
      name: "Pathology",
      img: "/assets/images/department/dp7.png",
      des: "  The medical specialty concerned with the study of the nature and causes of diseases.",
    },
    {
      name: "Endoscopy",
      img: "/assets/images/department/dp13.png",
      des: "An endoscopy is a procedure used in medicine to look inside the body.",
    },
    {
      name: "ABPM/ Holter/ ECG",
      img: "/assets/images/department/dp8.png",
      des: "Electrical activity of the heart continuously 24/7 while away from the doctor's office.",
    },
    {
      name: "NCS / EMV",
      img: "/assets/images/department/dp5.png",
      des: "Electrical activity of the muscles and nerves of the body, usually to an arm or a leg.",
    }
    
  ];
  return (
    <div className="dps2-div">
      <div className="dps2-p1">Diagnostics</div>
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

export default Dpsection;
