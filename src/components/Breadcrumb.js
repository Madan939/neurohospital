import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({name}) => {
  return (
    <>
      <div className='breadcrumb'>
        <div className='b-div'>
            <div className='b-div1 d-flex '>
                <Link to="/">Home</Link>
                <i class="fa-solid fa-angles-right"></i>
                <div className='b-p1'>{name}</div>

            </div>
        <p className='b-p2'>{name}</p>
        </div>  
      </div>
    </>
  )
}

export default Breadcrumb
