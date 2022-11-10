import React from 'react'
import './css/Hero.css'
import HeroClips from '../hero/HeroClips';
import SocialLinks from '../hero/SocialLinks';
import Nav from '../nav/Nav';



const Hero = ({heroapi}) => {
    const {btntext, img, sociallinks,subtitle,title,videos} = heroapi
  return (
    <section id='hero-section'>
        <Nav/>
        <div className="hero-inside">
            <div className="container">
                <div className="hero-content">
                    <h1>{title}</h1> <br />
                    <h1>{subtitle}</h1>
                    <button>{btntext}</button>
                </div>
                <div className="hero-videos-image-social">
                    <div className="row">
                        <div className = "col-md-2 col-sm-2 col-3">
                            <div className="videos">
                                {
                                    videos?.map((video, index)=>{
                                        return(
                                            <HeroClips
                                                key={index}
                                                video={video.clip}
                                                imgsrc={video.imgsrc}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-9 col-7">
                            <div className="image">
                                <img src={img} alt="" className='img-fluid'/>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-1 col-2">
                            <div className="social">
                                {
                                    sociallinks?.map((sociallink, index)=>{
                                        return(
                                            <SocialLinks
                                                key={index}
                                                icon={sociallink.icon}                                            
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape"></div>
    </section>
  )
}

export default Hero