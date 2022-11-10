import React from 'react'
import './TopStories.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Story from './story/Story';

const TopStories = ({stories}) => {
    const title = stories.title
    const allStories = stories.news
  return (
    <section id='story-section'>
        <div className="container">
            <h2>{title}</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    576:{
                        slidesPerView: 2,
                    },
                    768:{
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    }
                }}
            >
                {
                allStories?.map((story, index)=>{
                    return(
                        <SwiperSlide>
                            <Story
                                key={index}
                                title={story.title}
                                text={story.text}
                                img={story.img}
                                url={story.url}
                                like={story.like}
                                time={story.time}
                                by={story.by}
                                btn={story.btn}
                            />
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </div>
    </section>
  )
}

export default TopStories