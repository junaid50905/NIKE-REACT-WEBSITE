import React from 'react'
import './Story.css'
import { BsFillHeartFill, BsClock } from "react-icons/bs";
import { truncate } from 'lodash';

const Story = ({title,text,img,url,like,time,by,btn}) => {
  return (
    <div className='story'>
        <div className="image">
            <img src={img} alt="" />
        </div>
        <div className="content">
            <div className="like-time-by">
                <span><BsFillHeartFill className='heart-icon'/> {like}</span>
                <span><BsClock/> {time}</span>
                <a href='#'>#{by}</a>
            </div>
            <div className="title-text">
              <h6>{title}</h6>
              <p>{truncate(text, {length: 120})}</p>
              <a href={url}>{btn}</a>
            </div>
        </div>
    </div>
  )
}

export default Story