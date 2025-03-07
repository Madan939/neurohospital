import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Department from '../pages/Department'
import Doctor from '../pages/Doctor'

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/departments" element={<Department/>}/>
        <Route path="/doctors" element={<Doctor/>}/>
      </Routes>
    </>
  )
}

export default MyRoute
