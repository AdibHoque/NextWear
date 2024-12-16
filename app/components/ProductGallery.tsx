/* eslint-disable @next/next/no-img-element */
"use client";

import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import {FreeMode, Thumbs} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {useState} from "react";

const ProductGallery = ({image}: {image: string}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{swiper: thumbsSwiper}}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 h-80"
      >
        <SwiperSlide className="w-full flex justify-center items-center bg-[#F0EEED] rounded-2xl">
          <img src={image} className="mx-auto" alt="product" />
        </SwiperSlide>
        <SwiperSlide className="w-full flex justify-center items-center bg-[#F0EEED] rounded-2xl">
          <img src={image} className="mx-auto" alt="product" />
        </SwiperSlide>
        <SwiperSlide className="w-full flex justify-center items-center bg-[#F0EEED] rounded-2xl">
          <img src={image} className="mx-auto" alt="product" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper mt-2"
      >
        <SwiperSlide>
          <img src={image} className="rounded-2xl" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} className="rounded-2xl" alt="product" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} className="rounded-2xl" alt="product" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductGallery;
