import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({name1,name2}) => {
  return (
    <>
      <div className='breadcrumb'>
        <div className='b-div'>
            <div className='b-div1 d-flex '>
                <Link to="/">Home</Link>
                <i class="fa-solid fa-angles-right"></i>
                <div className='b-p1'>{name1}</div>

            </div>
        <p className='b-p2'>{name2}</p>
        </div>  
      </div>
    </>
  )
}

export default Breadcrumb
