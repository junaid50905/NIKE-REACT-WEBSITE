import React from 'react'
import './TopRatedItem.css'
import { BsFillBagCheckFill, BsFillStarFill } from "react-icons/bs";
const TopRatedItem = ({id,title,text,rating,btn,price,color,shadow,img}) => {
  return (
    <div className="top-rated-item"
        style = {
            {
                backgroundImage: `linear-gradient(${color})`,
                boxShadow: `${shadow} 5px 11px 27px -4px`,
            }
        }
    >
        <h5>{title}</h5>
        <p>{text}</p>
        <div className="pricing-rating">
            <span className='pricing'>${price}</span>
            <span className='rating'><BsFillStarFill/>{rating}</span>
        </div>
        <div className="cartBtn-buyBtn">
            <BsFillBagCheckFill className='cart-icon'/>
            <button>{btn}</button>
        </div>
        <div className="image">
            <img src={img} alt="" />
        </div>
    </div>
  )
}

export default TopRatedItem
