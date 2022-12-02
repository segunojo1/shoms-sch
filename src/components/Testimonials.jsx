import React from 'react'
import { Parallax } from 'react-parallax'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <Parallax className=''  bgImage="Banner-Clouds.png" bgImageAlt="testimonial" strength={800}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] w-[80%] mx-auto mt-[7rem] mb-[4rem]'>

       <Testimonial 
       text="“A lot of people comment that they can spot a co-op kid in an elementary school classroom because of the confident and respectful way they approach conflict.”"
       img="johnson.jpeg"
       title="ANONYMOUS"/> 
       <Testimonial 
       text="“I never expected an early-years school to have such a positive impact on our kids and family life, but our time with the teachers and community at Shoms has been incredible.”"
       img="johnson.jpeg"
       title="ANONYMOUS"/> 
        <Testimonial 
       text="“I never expected an early-years school to have such a positive impact on our kids and family life, but our time with the teachers and community at Shoms has been incredible.”"
       img="johnson.jpeg"
       title="ANONYMOUS"/> 
        <Testimonial 
       text="“I never expected an early-years school to have such a positive impact on our kids and family life, but our time with the teachers and community at Shoms has been incredible.”"
       img="johnson.jpeg"
       title="ANONYMOUS"/> 
      </div>
    </Parallax>
  )
}

export default Testimonials