import React from 'react'

const Testimonial = (props) => {
  return (
    <div className=' grid-cols-1 lg:grid-cols-2 grid  bg-white rounded-md p-[3rem]'>
        <p className='w-[11rem] font-semibold mx-auto'>{props.text}</p>
        <div className='flex-col flex items-center justify-between'>
            <img src={props.img} alt="" />
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default Testimonial