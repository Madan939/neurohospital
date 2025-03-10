import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
      </Routes>
    </>
  )
}

export default MyRoute
