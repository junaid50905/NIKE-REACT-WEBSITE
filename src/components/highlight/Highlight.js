import React from 'react'
import './Highlight.css'
const Highlight = ({highlight}) => {
  const {
    heading,
    title,
    text,
    btn,
    url,
    img
  } = highlight
  return (
    <section id='highlight-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="highlight-image">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="highlight-content">
                <h2>{heading}</h2>
                <h1>{title}</h1>
                <p>{text}</p>
                <a href={url}>{btn}</a>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Highlight
