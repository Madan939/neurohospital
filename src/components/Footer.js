import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='shadow mt-3 '>
        <div className='main-footer  mt-3'>
          <div className='footer-row row mt-3 '>
            <div className='col col-3'>
              <NavLink to="">
                <img src="/images/footer-logo.png" alt='footer-logo' className='footer-logo'/>
              </NavLink>
              <p className='footer-p'>Providing best healthcare solutions in Biratnagar, Nepal. Asia's profesionally managed healthcare solutions.</p>
              <div className='footer-media-icons'>
                <NavLink to=""><i className="fa-brands fa-whatsapp"></i></NavLink>
                <NavLink to=""><i className="fa-brands fa-linkedin"></i></NavLink>
                <NavLink to=""><i className="fa-brands fa-youtube"></i></NavLink>
                <NavLink to=""><i className="fa-brands fa-instagram"></i></NavLink>
                <NavLink to=""><i className="fa-brands fa-square-facebook"></i></NavLink>
                </div> 
            </div>
            <div className='col col-3'>
              <p className='footer-head'>Our Location</p>
              <p>F73M+G94, Jahada Road, Biratnagar, Nepal</p>
              <p>E: info@neurohospital.com.np</p>
              <p>P: +977-21-417484 / 417475</p>
            </div>
            <div className='col col-3'>
            <p className='footer-head'>OPD Hours</p>
            <p>Sun-Fri - 10:30AM - 05:00PM</p>
            <p>Saturday - Closed</p>
            </div>
            <div className='col col-3'>
            <p className='footer-head'>Toll Free Number</p>
            <p>1660-21-52777</p>
            <p>24X7 Helpline</p>
            <p>+977-21-416267</p>
            </div>
          </div>
          <hr/>
        </div>
        <div className='w-50 m-auto'>
          Copyright &copy; 2000- Neuro Cardio & Multispeciality Hospital Pvt.Ltd. All Rights Reserved
          </div>
          <div className='w-25 m-auto'>
          Site Managed By : PRACAS Upreti
          </div>
      </footer>
    </div>
  )
}

export default Footer
