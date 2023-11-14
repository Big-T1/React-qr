import React from 'react'
import img from '../assets/images/image-qr-code.png'
import './Landing.css'

const Landing = () => {
  return (
    <>
    <div class="component">
      <img src={img} alt="" />
        <h1 className='improve'>Improve your front-end skills by building projects
        </h1>
        <p className='scan'> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </>
  )
}

export default Landing