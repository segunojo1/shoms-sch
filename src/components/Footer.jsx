import React from 'react'
import FooterComp from './FooterComp'

const Footer = () => {
  return (
    <div className='bg-black '>
        <div className='mx-auto w-[80%] container text-white flex flex-col md:flex-row justify-between py-[3rem]'>
            <div>
                
                <div className='mb-[2rem] flex items-center justify-between w-[6rem]'>
                    <img src="facebook.png" alt="" />
                    <img src="ig.png" alt="" />
                    <img src="twitter.png" alt="" />
                </div>
                <p className='text-white'>2022 Shoms Int'l Sch</p>
            </div>
            <FooterComp 
                head="2, Odutola street"
                one="off-Nnobi"
                two="kilo"
                three="Surulere"
            />
            <FooterComp 
                head="School"
                one="Classes"
                two="Staff"
                four="Learn More"
            />
            <FooterComp 
                head="About Us"
                one="Staff"
                two="Classes"
            />
        </div>
    </div>
  )
}

export default Footer