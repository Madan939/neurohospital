import React from 'react'
import { Route, Routes,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Department from '../pages/Department'
import Doctor from '../pages/Doctor'
import Message from '../pages/Message'
import Partner from '../pages/Partner'
import Academics from '../pages/Academics'
import Gallery from '../pages/Gallery'
import Testimonials from '../pages/Testimonials'
import HospitalCalender from '../pages/HospitalCalender'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import Career from '../pages/Career'
import LocationMap from '../pages/LocationMap'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'
import UserLogin from '../pages/UserLogin'
import WhatIsAnxiety from '../pages/blogs/WhatIsAnxiety'
import MigraineHeadache from '../pages/blogs/MigraineHeadache'
import ASD from '../pages/blogs/ASD'
import Blogs from '../pages/blogs/Blogs'

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/departments" element={<Department/>}/>
        <Route path="/doctors" element={<Doctor/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/partner" element={<Partner/>}/>
        <Route path='/academics' element={<Academics/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/hospital-calender" element={<HospitalCalender/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/location-map" element={<LocationMap/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/login" element={<UserLogin/>}/>
        <Route path='/blogs/what-is-anxiety' element={<WhatIsAnxiety/>}/>
        <Route path='/blogs/migraine-headache' element={<MigraineHeadache/>}/>
        <Route path='/blogs/autism-spectrum-disorder-asd-3' element={<ASD/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </>
  )
}

export default MyRoute
