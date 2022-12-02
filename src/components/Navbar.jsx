import React, { useState } from 'react'
import { Parallax } from 'react-parallax'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const showNav = () => {
    console.log(show);
    setShow(prev => !prev)
   
  }
  return (
    <Parallax strength={400}>
    <div className='nav__bar fixed w-[100%] tracking-[5px]'>
        <ul className='flex w-[80%] justify-between lg:items-start items-center py-[3rem] lg:items-center h-[6rem] mx-auto'>
          <img src="shomslogo.jpg" alt="" className='rounded-lg'/>
          <div className={show ? 'nav__menu show' : 'nav__menu' }>
            <NavLink to="/" className="nav__item hover:text-black" onClick={showNav}>OUR SCHOOL</NavLink>
            <NavLink to="/test" className="nav__item hover:text-black" onClick={showNav}>CLASSES</NavLink>
            <NavLink to="/" className="nav__item hover:text-black" onClick={showNav}>REGISTRATION</NavLink>
            <NavLink to="/" className="btn__enroll nav__item hover:text-black" onClick={showNav}>ENROLL NOW</NavLink>
          </div>
          <div className='block lg:hidden w-[40px] h-[3px] bg-black cursor-pointer' onClick={showNav}>

          </div>
        </ul>
    </div>
    </Parallax>
  )
}
