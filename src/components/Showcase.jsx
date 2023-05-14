import React, { useEffect, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ApiCard from "./ApiCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { listaAPI } from '../costanti/constant'

const Showcase = () => {
  return (
    <div className="mb-5">
    <h1 className="mb-10 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">Other LGBTQIA+ themed APIs</h1>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {listaAPI.map((api) => (
        <SwiperSlide key={api.id} className="px-[6rem]">
          <ApiCard title={api.title} desc={api.desc} img={api.img} url={api.link}/>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default Showcase