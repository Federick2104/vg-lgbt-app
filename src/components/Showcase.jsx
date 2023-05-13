import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import lgbt_relation from "../assets/lgbt_relation.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Showcase = () => {
  return (
    <div className="h-screen mb-5">
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
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
      <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={lgbt_relation} alt="lgbt"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Nome</div>
          <p className="text-gray-700 text-base">
            Gioco
          </p>
          <p className="text-gray-700 text-base">
            Gay
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  className="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={lgbt_relation} alt="lgbt"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Nome</div>
          <p className="text-gray-700 text-base">
            Gioco
          </p>
          <p className="text-gray-700 text-base">
            Gay
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={lgbt_relation} alt="lgbt"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Nome</div>
          <p className="text-gray-700 text-base">
            Gioco
          </p>
          <p className="text-gray-700 text-base">
            Gay
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="mx-auto max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={lgbt_relation} alt="lgbt"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Nome</div>
          <p className="text-gray-700 text-base">
            Gioco
          </p>
          <p className="text-gray-700 text-base">
            Gay
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#gay</span>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default Showcase