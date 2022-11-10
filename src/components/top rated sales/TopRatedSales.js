import React from 'react'
import TopRatedItem from './top rated item/TopRatedItem'
import './TopRatedSales.css'

const TopRatedSales = ({toprateslaes}) => {
    const toprateditems = toprateslaes.items
  return (
    <section id='top-rated-sales-section'>
        <div className="container">
            <h2>{toprateslaes.title}</h2>
            <div className="row">
                {
                    toprateditems?.map((toprateditem, index)=>{
                        return(
                            <div className="col-md-3">
                                <TopRatedItem
                                    id= {toprateditem.id}
                                    title={toprateditem.title}
                                    text={toprateditem.text}
                                    rating={toprateditem.rating}
                                    btn={toprateditem.btn}
                                    img={toprateditem.img}
                                    price={toprateditem.price}
                                    color={toprateditem.color}
                                    shadow={toprateditem.shadow}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default TopRatedSales
