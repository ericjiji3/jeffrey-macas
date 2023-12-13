import Image from 'next/image'
import styles from './photos.css'
import Img1 from '../../../public/images/pic1.jpg'
import Img2 from '../../../public/images/pic2.jpg'
import Img3 from '../../../public/images/pic3.jpg'
import Img4 from '../../../public/images/pic4.jpg'
import Img5 from '../../../public/images/pic5.jpg'
import Img6 from '../../../public/images/pic6.jpg'
import Img7 from '../../../public/images/pic7.jpg'
import { register } from 'swiper/element/bundle'

import {useRef, useState, useEffect} from 'react'
import SwiperCore, { Lazy } from "swiper"
SwiperCore.use([Lazy])

register();

export default function Photos() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
  }, []);
  return (
    <div className="photosContainer">
      <swiper-container ref={swiperElRef}
      slides-per-view="1"
      navigation="true"
      pagination="true"
      centered-slides="true"
      centered-slides-bounds="true"
      loop="true"
      >
        <swiper-slide><Image loading="eager" src={Img1} width={250}/></swiper-slide>
        <swiper-slide><Image loading="eager"src={Img2} width={250}/></swiper-slide>
        <swiper-slide><Image loading="eager" src={Img3} width={250}/></swiper-slide>
        <swiper-slide><Image loading="eager" src={Img4} width={250}/></swiper-slide>
        <swiper-slide><Image loading="eager" src={Img5} width={250}/></swiper-slide>
        <swiper-slide><Image loading="eager" src={Img6} width={250}/></swiper-slide>
        <swiper-slide><Image loading="eager" src={Img7} width={250}/></swiper-slide>
      </swiper-container>
    </div>
  )
}
