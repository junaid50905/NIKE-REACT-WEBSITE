import React from 'react'
import './css/SocialLinks.css'
const SocialLinks = ({icon}) => {
  return (
    <>
        <div className="social-links">
          <img src={icon} alt="social_link" />
        </div>
    </>
  )
}

export default SocialLinks