import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Gallery = () => {
  const name1 = "Our Gallery";
  const name2 = "Hospital Gallery";
  const list1 = [
    { id: 1, pic: "/images/gallery/g1.jpg" },
    { id: 2, pic: "/images/gallery/g2.jpg" },
    { id: 3, pic: "/images/gallery/g4.jpg" },
    { id: 4, pic: "/images/gallery/g5.jpg" },
    { id: 5, pic: "/images/gallery/g6.jpg" },
    { id: 6, pic: "/images/gallery/g8.jpg" },
    { id: 7, pic: "/images/gallery/g9.jpg" },
    { id: 8, pic: "/images/gallery/g10.jpg" },
    { id: 9, pic: "/images/gallery/g12.jpg" },
    { id: 10, pic: "/images/gallery/g13.jpg" },
    { id: 11, pic: "/images/gallery/g14.jpg" },
    { id: 12, pic: "/images/gallery/g15.jpg" },
    { id: 13, pic: "/images/gallery/g16.jpg" },
    { id: 14, pic: "/images/gallery/g17.jpg" },
    { id: 15, pic: "/images/gallery/g18.jpg" },
    { id: 16, pic: "/images/gallery/g19.jpg" },
  ];
  const list2 = [
    { id: 17, pic: "/images/gallery/g3.jpg" },
    { id: 18, pic: "/images/gallery/g7.jpg" },
    { id: 19, pic: "/images/gallery/g11.jpg" },
    { id: 20, pic: "/images/gallery/g20.jpg" },
  ];

  const images = [...list1, ...list2];
  const [showImage, setShowImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const show = (imgId) => {
    const index = images.findIndex((img) => img.id === imgId);
    if (index !== -1) {
      setCurrentIndex(index);
      setShowImage(images[index].pic);
    }
  };

  const closeImage = () => {
    setShowImage(null);
    setCurrentIndex(null);
  };

  const next = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setShowImage(images[newIndex].pic);
    }
  };

  const prev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setShowImage(images[newIndex].pic);
    }
  };

  return (
    <>
      <Breadcrumb name1={name1} name2={name2} />
      <div className="gallery">
        <div className="g-col-div1">
          {list1.map((item) => (
            <div key={item.id} className="gd1-c1">
              <img src={item.pic} alt="img" />
              <div className="overlay1">
                <div className="ov-ch">
                  <i onClick={() => show(item.id)} className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="g-col-div2">
          {list2.map((item) => (
            <div key={item.id} className="gd2-c1">
              <img src={item.pic} alt="img" />
              <div className="overlay2">
                <div className="ov-ch1">
                  <i onClick={() => show(item.id)} className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showImage && (
          <div className="g-pic">
            <div className="g-pic-overlay" onClick={closeImage}>
              <img src={showImage} alt="img" />
            </div>
            <button className="g-btn btn" onClick={closeImage}>Close</button>
            <button className="g-prev-btn" onClick={prev} disabled={currentIndex === 0}
            style={{ color: currentIndex === 0 ? "rgb(163, 161, 161)" : " white" }}>
                <i className="fa-solid fa-less-than"></i>
              </button>
              <button className="g-next-btn" onClick={next} disabled={currentIndex === images.length - 1}
               style={{ color: currentIndex === images.length - 1 ? "rgb(163, 161, 161)" : " white" }}>
                <i className="fa-solid fa-greater-than"></i>
              </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
