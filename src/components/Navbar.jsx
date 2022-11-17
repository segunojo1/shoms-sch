import React from 'react'
import { Parallax } from 'react-parallax'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Parallax strength={400}>
    <div className='nav__bar fixed w-[100%] tracking-[5px]'>
        <ul className='flex w-[80%] justify-between items-center h-[6rem] mx-auto'>
          <img src="shomslogo.jpg" alt="" className='rounded-lg'/>
            <NavLink to="/" className="nav__item hover:text-black">OUR SCHOOL</NavLink>
            <NavLink to="/test" className="nav__item hover:text-black">CLASSES</NavLink>
            <NavLink to="/" className="nav__item hover:text-black">REGISTRATION</NavLink>
            <NavLink to="/" className="btn__enroll nav__item hover:text-black">ENROLL NOW</NavLink>
        </ul>
    </div>
    </Parallax>
  )
}
