import React from 'react'
import './Featured.css'

const Featured = ({sneaker}) => {
    const {
        heading,
        title,
        text,
        btn,
        url,
        img
    } = sneaker
  return (
    <section id='featured-section'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="sneaker-content">
                        <h2>{heading}</h2>
                        <h1>{title}</h1>
                        <p>{text}</p>
                        <a href={url}>{btn}</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="sneaker-image">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured