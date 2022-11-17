import React from 'react'

const Testimonial = (props) => {
  return (
    <div>
        <p>{props.text}</p>
        <img src={props.img} alt="" />
        <p>{props.title}</p>
    </div>
  )
}

export default Testimonial