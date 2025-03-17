import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sec8 = () => {
    const navigate = useNavigate();
    function load(link) {
      navigate(link);
      window.location.reload();
    }
    const List=[
        {
            id:1,
            pic:"/images/homepage/sec-8-1.jpg",
            name:"What is Anxiety?",
            date:"07 Feburary 2024",
            des:"Anxiety is a natural human emotion characterized by feelings of worry, nervousness, apprehension, and dread. It can manifest.....",
            link:"/blog/what-is-anxiety"
        },
        {
            id:2,
            pic:"/images/homepage/sec-8-2.jpg",
            name:"Migraine Headache",
            date:"01 Feburary 2024",
            des:"Migraine is a common disorder which causes a disabling headache usually associated with nausea / vomiting and/ or light and Sound sensitivity. ....",
            link:"/blog/migraine-headache"
        },
        {
            id:3,
            pic:"/images/homepage/sec-8-3.jpg",
            name:"Autism Spectrum Disorder (ASD)",
            date:"4 January 2024",
            des:"Autism, or autism spectrum disorder (ASD), is a neurodevelopmental disorder characterized by a presence of...",
            link:"/blog/autism-spectrum-disorder-asd-3"
        },
    ]
  return (
    <>
        <div className="blogs-row row ">
            {List.map((card) => (
              <div className="blogs-col cols col-md-4 col-sm-12">
                <div className="blogs-col-div shadow" onClick={() => load(card.link)}>
                  <img src={card.pic} alt={card.name} className="blogs-img" />
                  <p className="mx-2">
                    <Link
                      onClick={() => load(card.link)}
                      className="blogs-card-p1"
                    >
                      {card.name}
                    </Link>
                  </p>
                  <p className="blogs-p3 mx-2">{card.des}&nbsp;<Link className="blog-info" onClick={() => load(card.link)} >
                    See more
                  </Link></p>
                  <p className="blog-date mx-2">Date posted:{card.date}</p>
                  <br/>

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
    </>
  )
}

export default Sec8
