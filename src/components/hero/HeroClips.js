import React from 'react'
import './css/HeroClips.css'
import { BsFillPlayFill } from "react-icons/bs";
const HeroClips = ({video,imgsrc}) => {
  return (
    <div className='hero-video'>
        <img src={imgsrc} alt="" />
        <video video autoPlay = {true} muted = {true} loop = {true}>
          <source 
            src={video}
          />
        </video>
        <BsFillPlayFill className='play-icon'/>
    </div>
  )
}

export default HeroClips