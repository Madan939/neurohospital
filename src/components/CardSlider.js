import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode ,Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const cards = [
  {
    id: 1,
    img: "/images/sl1.png",
    name: "NEUROLOGY",
    description:
      "The branch of medicine concerned with the study and treatment of disorders of the nervous system. It is a complex system that regulates and coordinates body activities. ",
  },
  {
    id: 2,
    img: "/images/sl2.png",
    name: "NEUROSURGERY",
    description:
      "The branch of medicine concerned with the study and treatment of disorders of the nervous system. It is a complex system that regulates and coordinates body activities. ",
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
      " An X-ray, also called a radiograph, sends radiation through the body. Areas with high levels of calcium (bones and teeth) block the radiation, causing them to appear white on the image.",
  },
  {
    id: 5,
    img: "/images/sl5.png",
    name: "GENERAL SURGERY",
    description:
      " Medical specialty dealing with the diagnosis and treatment of diseases and abnormalities involving the heart and blood vessels. Cardiology is a medical, not surgical, discipline.",
  },
  {
    id: 6,
    img: "/images/sl6.png",
    name: "PEDIATRICS",
    description:
      "It is a noninvasive medical imaging test that produces  detailed images of almost every internal structure in the human body, including the organs, bones, muscles and blood.",
  },
  {
    id: 7,
    img: "/images/sl7.png",
    name: "GYNECOLOGY",
    description:
      "It is the branch of medicine dealing with the skin. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, cosmetic problems. ",
  },
  {
    id: 8,
    img: "/images/sl8.png",
    name: "NEPHROLOGY",
    description:
    "It comprises of both medicine as well as surgical fields.While many of the it illnesses need hormonal and other pharmacological management, cancers, fibroids etc."},
];

const CardSlider = () => {
  return (
    <>
        <Swiper
        className="swiper"
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction:false,
          reverseDirection: true,
          pauseOnMouseEnter:true,
        }}
        speed={5000}
        pagination={{ clickable: true }}
        modules={[Autoplay, FreeMode,Pagination]}
      > 
        {cards.map((card) => (
          <SwiperSlide key={card.id}>       
            <div className="card slider-card">
              <div className=" slider-div">
                <img
                  src={card.img}
                  alt={card.name}
                  className="slider-card-img"
                />
                <h3 className="slider-card-h3">{card.name}</h3>
                <p className="slider-card-p">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlider;
