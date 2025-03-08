// import React, { useState } from "react";
// import Breadcrumb from "../components/Breadcrumb";

// const Gallery = () => {
//   const name1 = "Our Gallery";
//   const name2 = "Hospital Gallery";
//   const list1 = [
//     { pic: "/images/gallery/g1.jpg" },
//     { pic: "/images/gallery/g2.jpg" },
//     { pic: "/images/gallery/g4.jpg" },
//     { pic: "/images/gallery/g5.jpg" },
//     { pic: "/images/gallery/g6.jpg" },
//     { pic: "/images/gallery/g8.jpg" },
//     { pic: "/images/gallery/g9.jpg" },
//     { pic: "/images/gallery/g10.jpg" },
//     { pic: "/images/gallery/g12.jpg" },
//     { pic: "/images/gallery/g13.jpg" },
//     { pic: "/images/gallery/g14.jpg" },
//     { pic: "/images/gallery/g15.jpg" },
//     { pic: "/images/gallery/g16.jpg" },
//     { pic: "/images/gallery/g17.jpg" },
//     { pic: "/images/gallery/g18.jpg" },
//     { pic: "/images/gallery/g19.jpg" },
//   ];
//   const list2 = [
//     { pic: "/images/gallery/g3.jpg" },
//     { pic: "/images/gallery/g7.jpg" },
//     { pic: "/images/gallery/g11.jpg" },
//     { pic: "/images/gallery/g20.jpg" },
//   ];
//   const [showImage, setShowImage] = useState(null);
//   const show = (img) => {
//     setShowImage(img);
//   };
//   return (
//     <>
//       <Breadcrumb name1={name1} name2={name2} />
//       <div className="gallery">
//         <div className="g-col-div1">
//           {list1.map((item) => (
//             <>
//               <div className="gd1-c1">
//                 <img src={item.pic} alt="img" />
//                 <div className="overlay1">
//                   <div className="ov-ch">
//                     <i
//                       onClick={() => show(item.pic)}
//                       className="fa-solid fa-magnifying-glass-plus"
//                     ></i>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ))}
//         </div>
//         <div className="g-col-div2">
//           {list2.map((item) => (
//             <div className="gd2-c1">
//               <img src={item.pic} alt="img" />
//               <div className="overlay2">
//                 <div className="ov-ch1">
//                   <i className="fa-solid fa-magnifying-glass-plus"></i>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {showImage?(
//             <>
//             <div className="g-pic">
//                 <img src={showImage} alt="img"/>
//             </div>
//             </>
//         ):(
//             <></>
//         )}
//       </div>
//     </>
//   );
// };

// export default Gallery;
import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Gallery = () => {
  const name1 = "Our Gallery";
  const name2 = "Hospital Gallery";
  const list1 = [
    { pic: "/images/gallery/g1.jpg" },
    { pic: "/images/gallery/g2.jpg" },
    { pic: "/images/gallery/g4.jpg" },
    { pic: "/images/gallery/g5.jpg" },
    { pic: "/images/gallery/g6.jpg" },
    { pic: "/images/gallery/g8.jpg" },
    { pic: "/images/gallery/g9.jpg" },
    { pic: "/images/gallery/g10.jpg" },
    { pic: "/images/gallery/g12.jpg" },
    { pic: "/images/gallery/g13.jpg" },
    { pic: "/images/gallery/g14.jpg" },
    { pic: "/images/gallery/g15.jpg" },
    { pic: "/images/gallery/g16.jpg" },
    { pic: "/images/gallery/g17.jpg" },
    { pic: "/images/gallery/g18.jpg" },
    { pic: "/images/gallery/g19.jpg" },
  ];
  const list2 = [
    { pic: "/images/gallery/g3.jpg" },
    { pic: "/images/gallery/g7.jpg" },
    { pic: "/images/gallery/g11.jpg" },
    { pic: "/images/gallery/g20.jpg" },
  ];
  const [showImage, setShowImage] = useState(null);
  const show = (img) => {
    setShowImage(img);
  };
  const closeImage = () => {
    setShowImage(null); // Close the image preview
  };

  return (
    <>
      <Breadcrumb name1={name1} name2={name2} />
      <div className="gallery">
        <div className="g-col-div1">
          {list1.map((item, index) => (
            <div key={index} className="gd1-c1">
              <img src={item.pic} alt="img" />
              <div className="overlay1">
                <div className="ov-ch">
                  <i
                    onClick={() => show(item.pic)}
                    className="fa-solid fa-magnifying-glass-plus"
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="g-col-div2">
          {list2.map((item, index) => (
            <div key={index} className="gd2-c1">
              <img src={item.pic} alt="img" />
              <div className="overlay2">
                <div className="ov-ch1">
                  <i onClick={() => show(item.pic)} className="fa-solid fa-magnifying-glass-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        {showImage && (
          <div className="g-pic">
            <div className="g-pic-overlay" onClick={closeImage}>
              <img src={showImage} alt="img" />
              <button className="g-btn btn" onClick={closeImage}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
