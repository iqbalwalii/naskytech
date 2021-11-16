import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import style from "../styles/Style.module.css";
import Image from "next/image";
// import Swiper core and required modules
import SwiperCore, { FreeMode, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Pagination]);

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={60}
        freeMode={true}
        className={style.mySwiper}
        style={{
          cursor: "url('/assets/cursor.svg'), auto !important",
        }}
      >
        <SwiperSlide className={style.slide} style={{ marginLeft: "15rem" }}>
          <div className="card">
            <Image src="/assets/(1).svg" width="80px" height="80px" />
            <h3>dolor sit amet</h3>
            <p
              style={{
                width: "80%",
                fontSize: "1.2rem",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              dignissimos esse repellendus sit animi perspiciatis fugit corrupti
              inventore nesciunt voluptate!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <div className="card">
            <Image src="/assets/(2).svg" width="80px" height="80px" />
            <h3>dolor sit amet</h3>
            <p
              style={{
                width: "80%",
                fontSize: "1.2rem",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              dignissimos esse repellendus sit animi perspiciatis fugit corrupti
              inventore nesciunt voluptate!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <div className="card">
            <Image src="/assets/(3).svg" width="80px" height="80px" />
            <h3>dolor sit amet</h3>
            <p
              style={{
                width: "80%",
                fontSize: "1.2rem",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              dignissimos esse repellendus sit animi perspiciatis fugit corrupti
              inventore nesciunt voluptate!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <div className="card">
            <Image src="/assets/(4).svg" width="80px" height="80px" />
            <h3>dolor sit amet</h3>
            <p
              style={{
                width: "80%",
                fontSize: "1.2rem",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              dignissimos esse repellendus sit animi perspiciatis fugit corrupti
              inventore nesciunt voluptate!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
