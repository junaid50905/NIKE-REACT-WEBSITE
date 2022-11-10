import React from 'react'
import PopularItem from './popular item/PopularItem'
import './PopularSales.css'
const PopularSales = ({popularsales}) => {
    const popularItems = popularsales.items    
  return (
    <section id='popular-sales-section'>
        <div className="container">
            <h2>{popularsales.title}</h2>
            <div className="popular-items">
                <div className="row justify-content-center">
                    {
                        popularItems?.map((popularItem, index)=>{
                            return(
                                <div className='col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12'>
                                    <PopularItem
                                        key={index}
                                        title={popularItem.title}
                                        text={popularItem.text}
                                        rating={popularItem.rating}
                                        btnText={popularItem.btn}
                                        img={popularItem.img}
                                        price={popularItem.price}
                                        color={popularItem.color}
                                        shadow={popularItem.shadow}
                                    />
                                </div>
                            )
                        })
                        }
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularSales