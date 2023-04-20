import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';



import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

SwiperCore.use([Pagination, Autoplay]);


export const ClientsCarousel = () => {


    return (
        <Fragment> 

            <div className="container">
              <Swiper
                  breakpoints={{
                      640: {
                          slidesPerView: 2,
                          spaceBetween: 20
                      },
                      768: {
                          slidesPerView: 3,
                          spaceBetween: 30
                      },
                      1024: {
                          slidesPerView: 5,
                          spaceBetween: 40
                      }
                      }}

                  spaceBetween={50}

                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="slider-1"
                  
                  
                  >
                  <div className="slider-1">
                      
                          
                              <div className="swiper-container card-slider">
                                  <div className="swiper-wrapper">
                                      <SwiperSlide>
                                          <div class="card">
                                              <img class="card-image" src="/assets/images/google.png" alt="alternative"/>
                                          </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                          <div class="card">
                                              <img class="card-image" src="/assets/images/isologo.png" alt="alternative"/>
                                          </div>       
                                      </SwiperSlide>
                                      <SwiperSlide>
                                          <div class="card">
                                              <img class="card-image" src="/assets/images/lglogo.png" alt="alternative"/>
                                          </div>      
                                      </SwiperSlide>
                                      <SwiperSlide>
                                          <div class="card">
                                              <img class="card-image" src="/assets/images/tcllogo.png" alt="alternative"/>
                                          </div>
                                      </SwiperSlide>
                                      <SwiperSlide>
                                          <div class="card">
                                              <img class="card-image" src="/assets/images/ztelogo.png" alt="alternative"/>
                                          </div>        
                                      </SwiperSlide>
                                      <SwiperSlide>
                                          <div class="card">
                                              <img class="card-image" src="/assets/images/formlabs.png" alt="alternative"/>
                                          </div>  
                                      </SwiperSlide>
                                      <SwiperSlide>
                                          <div class="card">
                                              <img class="card-image" src="/assets/images/tmobile.png" alt="alternative"/>
                                          </div>  
                                      </SwiperSlide>
                                      <SwiperSlide>
                                          <div class="card">
                                              <img class="card-image" src="/assets/images/verkada.png" alt="alternative"/>
                                          </div>  
                                      </SwiperSlide>

                                  </div>
                              </div>
                          
                      
                  </div>    
                  

              </Swiper>
            </div>
        </Fragment>

    );
  };