import React, { useState, useEffect } from 'react';
import i1 from '../assets/slider_photos/1.jpg';
import i2 from '../assets/slider_photos/2.jpg';
import i3 from '../assets/slider_photos/3.jpg';
import i4 from '../assets/slider_photos/4.jpg';
import i5 from '../assets/slider_photos/5.jpg';
import i6 from '../assets/slider_photos/6.jpg';
import i7 from '../assets/slider_photos/7.jpg';
import '../styles/slider.css';
import Dot from './Dot';

const Slider = () => {
  const [photos] = useState([i1, i2, i3, i4, i5, i6, i7])
  
  const [slides, setSlides] = useState({
    cur: 0,
    next: 1
  })

  useEffect(() => {
    let id = setInterval(() => {
      setSlides(prevSlides => {
        if(slides.cur === photos.length - 1) {
          return ({
            ...prevSlides,
            cur: 0,
            next: slides.next + 1
          })
        }
        return ({
          ...prevSlides,
          cur: slides.cur + 1,
          next: slides.next + 1
        })
      });
    }, 3000);
    return () => clearInterval(id);
  });
  
    return (
      <div className='slider-wrapper'>
        <div  className="slider-text">
          <h1>Festios Travel</h1>
          <p>Discover The Hidden Paradise!</p>
        </div>
        <div className='photo-wrapper'>
        <img src={photos[slides.cur]} className='slides-fade' />
          <div className='dots-wrapper'>
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
          </div>
        </div>
        <button>CLIC!!!</button>
      </div>
  
    )
  
  
}

export default Slider

// const [counter, setcount] = useState({
  //   count: 0
  // });
  // useEffect(() => {
    //   let id = setInterval(() => {
      //     setcount(curCount => ({count: curCount.count + 1}));
      //   }, 1000);
      //   console.log(counter);
      //   return () => clearInterval(id);
      // });
      // return <h1>{counter.count}</h1>;
      