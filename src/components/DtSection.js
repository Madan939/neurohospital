import React from "react";
import { Link } from "react-router-dom";

const DtSection = () => {
  const list = [
    {
      name: "Dr. Nikesh Raj Shrestha",
      pic: "/images/doctors/dc3.png",
      prof: "Senior Consultant Interventional Cardiologist",
      link: "/doctors",
      id: "NMC # : 3195",
    },
    {
      name: "Prof. Dr. Shailaja Chhetri (Shrestha)",
      pic: "/images/doctors/dc4.png",
      prof: "Senior Consultant Gynaecologist",
      link: "/doctors",
      id: "NMC # : 6703",
    },
    {
      name: "Dr. Sudeep Khaniya",
      pic: "/images/doctors/dc5.png",
      prof: "Senior Consultant GI & Laparoscopic Surgeon",
      link: "/doctors",
      id: "NMC # : 3633",
    },
    {
      name: "Dr. Vivek Kattel",
      pic: "/images/doctors/dc6.png",
      prof: "Senior Consultant Physician & Rheumatologist",
      link: "/doctors",
      id: "NMC # : 7537",
    },
    {
      name: "Dr. Sunanda Poudel",
      pic: "/images/doctors/dc7.png",
      prof: "Senior Consultant Neurologist",
      link: "/doctors",
      id: "NMC # : 8863",
    },
    {
      name: "Dr. Roshan Khatiwada",
      pic: "/images/doctors/dc8.jpg",
      prof: "Senior Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 8369",
    },
    {
      name: "Dr. Sunil Kumar Das",
      pic: "/images/doctors/dc9.jpg",
      prof: "Senior Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 13007",
    },
    {
      name: "Dr. Suresh Prasad Shah",
      pic: "/images/doctors/dc10.png",
      prof: "Senior Consultant Paediatrician",
      link: "/doctors",
      id: "NMC # : 13307",
    },
    {
      name: "Dr. Ranjan Thapa",
      pic: "/images/doctors/dc11.png",
      prof: "Consultant Psychiatrist",
      link: "/doctors",
      id: "NMC # : 3626",
    },
    {
      name: "Dr. Roshan Acharya",
      pic: "/images/doctors/dc12.png",
      prof: "Senior Consultant ENT Surgeon",
      link: "/doctors",
      id: "NMC # : 4116",
    },
    {
      name: "Dr. Sagar Raj Pandey",
      pic: "/images/doctors/dc13.png",
      prof: "Senior Consultant Pathologist",
      link: "/doctors",
      id: "NMC # : 2586",
    },
    {
      name: "Dr. Pannalal Shah",
      pic: "/images/doctors/dc14.png",
      prof: "Senior Consultant Radiologist",
      link: "/doctors",
      id: "NMC # : 3637",
    },
    {
      name: "Dr. Niraj Regmi",
      pic: "/images/doctors/dc15.png",
      prof: "Consultant Radiologist",
      link: "/doctors",
      id: "NMC # : 5480",
    },
    {
      name: "Dr. Manzil Shrestha",
      pic: "/images/doctors/dc16.png",
      prof: "Consultant Anesthesiologist",
      link: "/doctors",
      id: "NMC # : 4604",
    },
    {
      name: "Dr. Bhuwaneshwor Yadav",
      pic: "/images/doctors/dc17.png",
      prof: "Consultant Gastroenterologist",
      link: "/doctors",
      id: "NMC # : 10713",
    },
    {
      name: "Dr. Purushuttom Parajuli",
      pic: "/images/doctors/dc18.png",
      prof: "Consultant Urologist",
      link: "/doctors",
      id: "NMC # : 12015",
    },
    {
      name: "Dr. Nishan Bhurtel",
      pic: "/images/doctors/dc19.png",
      prof: "Senior Nephrologist",
      link: "/doctors",
      id: "NMC # : 9731",
    },
    {
      name: "Dr. Niraj Dhakal",
      pic: "/images/doctors/dc20.png",
      prof: "Consultant Nephrologist",
      link: "/doctors",
      id: "NMC # : 12283",
    },
    {
      name: "Dr. Mohan Karki",
      pic: "/images/doctors/dc21.png",
      prof: "Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 11223",
    },
    {
      name: "Dr. Ashish Jung Thapa",
      pic: "/images/doctors/dc22.png",
      prof: "Consultant Neurosurgeon",
      link: "/doctors",
      id: "NMC # : 11347",
    },
    {
      name: "Dr. Nisha Adhikari",
      pic: "/images/doctors/dc23.png",
      prof: "Consultant Gynaecologist",
      link: "/doctors",
      id: "NMC # : 11384",
    },
    {
      name: "Dr. Rajan Karn",
      pic: "/images/doctors/dc24.png",
      prof: "Consultant Cardiologist",
      link: "/doctors",
      id: "NMC # : 12949",
    },
    {
      name: "Dr. Amit Deo",
      pic: "/images/doctors/dc25.png",
      prof: "Consultant Orthopedic Surgeon",
      link: "/doctors",
      id: "NMC # : 9572",
    },
    {
      name: "Dr. Richa Sharma",
      pic: "/images/doctors/dc26.png",
      prof: "Consultant Dermatologist",
      link: "/doctors",
      id: "NMC # : 14810",
    },
    {
      name: "Dr. Arjun Chettri",
      pic: "/images/doctors/dc27.png",
      prof: "Consultant Anesthesiologist",
      link: "/doctors",
      id: "NMC # : 8893",
    },
    {
      name: "Dr. Lokendra Narayan Mandal",
      pic: "/images/doctors/dc28.png",
      prof: "Consultant Anesthesiologist",
      link: "/doctors",
      id: "NMC # : 12683",
    },
    {
      name: "Dr. Amit Pratap Shah",
      pic: "/images/doctors/dc29.png",
      prof: "Dental Surgeon",
      link: "/doctors",
      id: "NMC # : 6361",
    },
    {
      name: "Dr. Nabin Kumar Chaudhary",
      pic: "/images/doctors/dc30.png",
      prof: "Physiotherapist",
      link: "/doctors",
      id: "NMC # : 25PHY",
    },
    {
      name: "Join our Team",
      pic: "/images/doctors/dc31.png",
      prof: "Apply Now",
      link: "https://neurohospital.com.np/apply",
      id: "Apply now",
    },
  ];
  return (
    <>
      <div className="ul-doc">
        {list.map((item) => (
          <div className="li-doc">
            <div className="li-doc-1 text-center">
              <img src={item.pic} alt="dc1" />
              <div className="dcts-1-p1">{item.name}</div>
              <div className="dcts-1-p2">{item.prof}</div>
              <Link to={item.link} className="dcts-btn btn">{item.id}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DtSection;
