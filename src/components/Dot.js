import React from 'react'

const Dot = ({active, changeSlide, index}) => {
  return (
    <div id={active} className={`dot ${index}`} onClick={changeSlide}>
    </div>
  )
}

export default Dot
