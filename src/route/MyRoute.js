import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Department from "../pages/Department";
import Doctor from "../pages/Doctor";
import Message from "../pages/Message";
import Partner from "../pages/Partner";
import Academics from "../pages/Academics";
import Gallery from "../pages/Gallery";
import Testimonials from "../pages/Testimonials";
import HospitalCalender from "../pages/HospitalCalender";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Career from "../pages/Career";
import LocationMap from "../pages/LocationMap";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import WhatIsAnxiety from "../pages/blog/WhatIsAnxiety";
import MigraineHeadache from "../pages/blog/MigraineHeadache";
import ASD from "../pages/blog/ASD";
import Blogs from "../pages/blog/Blogs";
import WhatIsPhobia from "../pages/blog/WhatIsPhobia";
import RORICDAT from "../pages/blog/RORICDAT";
import ARDTACS from "../pages/blog/ARDTACS";
import VCH from "../pages/blog/VCH";
import KidneyStone from "../pages/blog/KidneyStone";
import Rheumatologist from "../pages/blog/Rheumatologist";
import KYABIKY from "../pages/blog/KYABIKY";
import OMOKO from "../pages/blog/OMOKO";
import BTFAS from "../pages/blog/BTFAS";
import BipolarDisorder from "../pages/blog/BipolarDisorder";
import DMAH from "../pages/blog/DMAH";
import DCHIW from "../pages/blog/DCHIW";
import HTCAD from "../pages/blog/HTCAD";
import IdiopathicInsomia from "../pages/blog/IdiopathicInsomia";
import PeripartumCardiomyopathy from "../pages/blog/PeripartumCardiomyopathy";
import POSP from "../pages/blog/POSP";
import SummerDandruff from "../pages/blog/SummerDandruff";
import THTOO from "../pages/blog/THTOO";
import WIAP from "../pages/blog/WIAP";
import WIAA from "../pages/blog/WIAA";
import WIA from "../pages/blog/WIA";
import WhatIsMigraine from "../pages/blog/WhatIsMigraine";
import Apply from "../pages/Apply";
import Services from "../pages/Services";
import Email from "../pages/Email";

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<LocationMap />} />
        <Route path="/email" element={<Email />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/calender" element={<HospitalCalender />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/blog/what-is-anxiety" element={<WhatIsAnxiety />} />
        <Route path="/blog/migraine-headache" element={<MigraineHeadache />} />
        <Route path="/blog/autism-spectrum-disorder-asd-3" element={<ASD />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/what-is-phobia" element={<WhatIsPhobia />} />
        <Route
          path="/blog/role-of-radiology-in-cancer-diagnosis-and-treatment"
          element={<RORICDAT />}
        />
        <Route
          path="/blog/anxiety-recognizing-different-types-and-coping-strategies"
          element={<ARDTACS />}
        />
        <Route path="/blog/vaccinations-childrens-health" element={<VCH />} />
        <Route path="/blog/kidney-stone" element={<KidneyStone />} />
        <Route path="/blog/rheumatologist" element={<Rheumatologist />} />
        <Route
          path="/blog/kill-your-appendicitis-before-it-kills-you"
          element={<KYABIKY />}
        />
        <Route
          path="/blog/outpatient-management-of-knee-osteoarthritis"
          element={<OMOKO />}
        />
        <Route
          path="/blog/best-time-for-appendicitis-surgery"
          element={<BTFAS />}
        />
        <Route path="/blog/bipolar-disorder" element={<BipolarDisorder />} />
        <Route
          path="/blog/difference-migraine-and-headache"
          element={<DMAH />}
        />
        <Route path="/blog/dry-chapped-hands-in-winter" element={<DCHIW />} />
        <Route
          path="/blog/how-to-control-anxiety-disorder"
          element={<HTCAD />}
        />
        <Route
          path="/blog/idiopathic-insomnia"
          element={<IdiopathicInsomia />}
        />
        <Route
          path="/blog/peripartum-cardiomyopathy"
          element={<PeripartumCardiomyopathy />}
        />
        <Route path="/blog/polycystic-ovary-syndrome-pcos" element={<POSP />} />
        <Route path="/blog/summer-dandruff" element={<SummerDandruff />} />
        <Route path="/blog/the-hidden-toll-of-obesity" element={<THTOO />} />
        <Route path="/blog/what-is-abdominal-pain" element={<WIAP />} />
        <Route path="/blog/what-is-acute-appendicitis" element={<WIAA />} />
        <Route path="/blog/what-is-appendicitis" element={<WIA />} />
        <Route path="/blog/what-is-migraine" element={<WhatIsMigraine />} />
      </Routes>
    </>
  );
};

export default MyRoute;
