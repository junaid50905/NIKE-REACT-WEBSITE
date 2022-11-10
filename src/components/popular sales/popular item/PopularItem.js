import React from 'react'
import './PopularItem.css'
import { BsFillBagCheckFill, BsFillStarFill } from "react-icons/bs";
const PopularItem = ({title,text,rating,btnText,img,price,color,shadow}) => {
  return (
    <article article className = 'popular-item'
        style = {
            {
                backgroundImage: `linear-gradient(${color})`,
                boxShadow: `${shadow} 5px 11px 27px -4px`,
            }
        }
    >
      <div className="content">
        <h5>{title}</h5>
        <p>{text}</p>
        <div className="pricing-rating">
            <span className='pricing'>$ {price}</span>
            <span className='rating'><BsFillStarFill className='rating-icon'/>{rating}</span>
        </div>
        <div className="cartBtn-buyBtn">
            <BsFillBagCheckFill className='cart-icon'/>
            <button>{btnText}</button>
        </div>  
      </div>
      <div className="image">
        <img src={img} alt="" className='img-fluid'/>
      </div>
    </article>
  )
}

export default PopularItem