import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  function load(link) {
    navigate(link);
    window.location.reload();
  }
  const List1 = [
    {
      pic: "/images/blog/blog-1.png",
      name: "Role of Radiology in Cancer Diagnosis and Treatment",
      date: "09 May 2024",
      des: "Cancer, a word that strikes fear into the hearts of many, has been a formidable opponent throughout human history. However, with advancements ..",
      link: "/blog/role-of-radiology-in-cancer-diagnosis-and-treatment",
    },
    {
      pic: "/images/blog/blog-2.png",
      name: "Anxiety: Recognizing Different Types and Coping Strategies",
      date: "02 May 2024",
      des: "In today's fast-paced and demanding world, many individuals experience anxiety at various levels. Anxiety is a common mental health condition ..",
      link: "/blog/anxiety-recognizing-different-types-and-coping-strategies",
    },
    {
      pic: "/images/blog/blog-3.png",
      name: "Importance of Immunizations for Children",
      date: "25 April 2024",
      des: "Vaccinations, or immunizations, are one of the most important tools we have to protect children from serious diseases. They work by stimulating the immune system...",
      link: "/blog/vaccinations-childrens-health",
    },
    {
      pic: "/images/blog/blog-4.png",
      name: "What is Kidney Stone?",
      date: "17 April 2024",
      des: "Kidney stones are a common and painful condition that can affect anyone, but with the right knowledge and habits.....",
      link: "/blog/kidney-stone",
    },
    {
      pic: "/images/blog/blog-5.png",
      name: "When to see a Rheumatologist ?",
      date: "11 April 2024",
      des: "A rheumatologist is a specialized doctor who diagnoses and treats diseases that affect the joints, muscles, bones, and connective ....",
      link: "/blog/rheumatologist",
    },
    {
      pic: "/images/blog/blog-6.png",
      name: "Kill Your Appendicitis Before It Kills You",
      date: "5 April, 2024",
      des: "Appendicitis is a medical condition that demands swift action. It might start with a seemingly innocent stomach ache, but if ...",
      link: "/blog/kill-your-appendicitis-before-it-kills-you",
    },
    {
      pic: "/images/blog/blog-7.jpg",
      name: "Migraine Headache",
      date: "07 March, 2024",
      des: "Migraine is a common disorder which causes a disabling headache usually associated with nausea / vomiting and/ or light and Sound sensitivity. ....",
      link: "/blog/migraine-headache",
    },
    {
      pic: "/images/blog/blog-8.jpg",
      name: "What is Anxiety?",
      date: "08 Feburary 2024",
      des: "Anxiety is a natural human emotion characterized by feelings of worry, nervousness, apprehension, and dread. It can manifest.....",
      link: "/blog/what-is-anxiety",
    },
    {
      pic: "/images/blog/blog-9.jpg",
      name: "Autism Spectrum Disorder (ASD)",
      date: "4 January 2024",
      des: "Autism, or autism spectrum disorder (ASD), is a neurodevelopmental disorder characterized by a presence of...",
      link: "/blog/autism-spectrum-disorder-asd-3",
    },
    {
      pic: "/images/blog/blog-10.webp",
      name: "Outpatient Management of Knee Osteoarthritis",
      date: "4 January 2024",
      des: "Osteoarthritis {OA} is a leading cause of disability worldwide. As a major weight-bearing joint, the knee..",
      link: "/blog/outpatient-management-of-knee-osteoarthritis",
    },
    {
      pic: "/images/blog/blog-12.png",
      name: "Best Time For Appendicitis Surgery",
      date: "May 27, 2024",
      des: "Appendicitis occurs when the appendix, a small pouch located in the lower right abdomen, becomes inflamed and infected. ...",
      link: "/blog/best-time-for-appendicitis-surgery",
    },
    {
      pic: "/images/blog/blog-13.webp",
      name: "Bipolar Disorder",
      date: "Dec 22, 2023",
      des: "Extreme mood swings or episodes of mania and depression are hallmarks of bipolar disorder, formerly known as ...",
      link: "/blog/bipolar-disorder",
    },
    {
      pic: "/images/blog/blog-14.png",
      name: "Difference Migraine And Headache",
      date: "Apr 16, 2024",
      des: "Headaches and migraines are often used interchangeably, but they are distinct conditions with different characteristics, causes, and ...",
      link: "/blog/difference-migraine-and-headache",
    },
    {
      pic: "/images/blog/blog-15.webp",
      name: "Dry Chapped Hands In Winter",
      date: "Dec 28, 2023",
      des: "Winter skin care can be particularly difficult, especially on the hands and other regions of the body that are frequently exposed to cold air...",
      link: "/blog/dry-chapped-hands-in-winter",
    },
    {
      pic: "/images/blog/blog-16.webp",
      name: "How To Control Anxiety Disorder",
      date: "Feb 29, 2024",
      des: "Anxiety is a natural response to stress or perceived threats. It’s a feeling of fear, uneasiness, or worry, typically about something that is about to...",
      link: "/blog/how-to-control-anxiety-disorder",
    },
    {
      pic: "/images/blog/blog-17.png",
      name: "Idiopathic Insomnia",
      date: "Apr 10, 2024",
      des: "Have you ever struggled with persistent sleep difficulties that seem to have no clear cause? For some individuals, a condition known as...",
      link: "/blog/idiopathic-insomnia",
    },
    {
      pic: "/images/blog/blog-18.webp",
      name: "Peripartum Cardiomyopathy",
      date: "Feb 1, 2024",
      des: "Peripartum cardiomyopathy (PPCM) is a form of acute and sometimes severe cardiac degeneration that leads to clinical heart failure ...",
      link: "/blog/peripartum-cardiomyopathy",
    },
    {
      pic: "/images/blog/blog-19.webp",
      name: "Polycystic Ovary Syndrome Pcos",
      date: "Jan 25, 2024",
      des: "Polycystic Ovary Syndrome (PCOS) is a common hormonal condition that affects women of reproductive age. It affects an ...",
      link: "/blog/polycystic-ovary-syndrome-pcos",
    },
    {
      pic: "/images/blog/blog-20.webp",
      name: "Summer Dandruff",
      date: "Apr 4, 2024",
      des: "Summer dandruff is a common condition that causes the skin on the scalp to flake. It isn’t contagious or serious. ...",
      link: "/blog/summer-dandruff",
    },
    {
      pic: "/images/blog/blog-21.webp",
      name: "The Hidden Toll of Obesity",
      date: "Feb 15, 2024",
      des: "Body image”-in the current generation this term stands out as a highly debated and controversial, often hailed as ...",
      link: "/blog/the-hidden-toll-of-obesity",
    },
    {
      pic: "/images/blog/blog-22.webp",
      name: "What is Abdominal Pain?",
      date: "Nov 29, 2023",
      des: "Abdominal pain is a common symptom that can be caused by a variety of factors, ranging from mild and temporary conditions to...",
      link: "/blog/what-is-abdominal-pain",
    },
    {
      pic: "/images/blog/blog-23.png",
      name: "What is Acute Appendicitis ?",
      date: "Jun 6, 2024",
      des: "Acute appendicitis is a common and potentially serious medical condition characterized by inflammation of the appendix...",
      link: "/blog/what-is-acute-appendicitis",
    },
    {
      pic: "/images/blog/blog-24.jpg",
      name: "What is Appendicitis ?",
      date: "Apr 4, 2024",
      des: "Appendicitis is a medical condition characterized by inflammation of the appendix, a small, finger-shaped pouch located at...",
      link: "/blog/what-is-appendicitis",
    },
    {
      pic: "/images/blog/blog-25.png",
      name: "What is Migraine ?",
      date: "Apr 9, 2024",
      des: "A migraine is a neurological condition characterized by recurring moderate to severe headaches, often accompanied by ..",
      link: "/blog/what-is-migraine",
    },
  ];
  return (
    <>
      <div className="blogs">
        <div className="blogs-div">
          <p className="blogs-p1">Neuro Hospital Blogs</p>
          <img
            src="/images/blog/phobia.png"
            alt="blogs-image"
            className="blog-img-1"
          />
          <br />
          <br />
          <p
            className="blogs-phobia"
            onClick={() => load("/blog/what-is-phobia")}
          >
            What is Phobia?
          </p>
          <p className="text-center text-dark">Mar 27, 2024</p>
          <p className="text-center">
            {" "}
            <Link
              onClick={() => load("/blog/what-is-phobia")}
              className="blog-btn btn"
              to="/blog/what-is-phobia"
            >
              Read More
            </Link>
          </p>
          <br />
          <br />
          <div className="blogs-row row ">
            {List1.map((card) => (
              <div className="blogs-col cols col-md-4 col-sm-12">
                <div className="blogs-col-div shadow" onClick={() => load(card.link)}>
                  <img src={card.pic} alt={card.name} className="blogs-img" />
                  <p className="m-1">
                    <Link
                      onClick={() => load(card.link)}
                      className="blogs-card-p1"
                    >
                      {card.name}
                    </Link>
                  </p>

                  <p className="m-1">{card.date}</p>
                  <p className="sec8-p3 m-1">{card.des}&nbsp;<Link className="blog-info" onClick={() => load(card.link)} >
                    See more
                  </Link></p>

                  {/* <Link
                    onClick={() => load(card.link)}
                    className="blogs-btn btn "
                  >
                    Read More
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
