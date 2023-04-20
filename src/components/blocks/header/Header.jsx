import React, { useRef, useEffect, Fragment } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/swiper-bundle.css';



export const Header = () => {


    

    return (

        <Fragment>
          <div className="header header-content">
            <div className="container-b">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="text-container">
                                <h2>Cynergy<br/><span className="blue"></span></h2>
                                <p className="p-large">Cynergy is a world-className, electronic service provider company specializing in manufacturing / repair of CDMA and GSM mobile phones, supporting devices and other ancillary devices.</p>
                                <a className="btn-solid-lg" href="/cynergyus/about.html">Know More</a>
                            </div> 
                        </div> 
                        <div className="col-lg-6 col-xl-6">
                            <div className="image-container">
                                <img className="img-fluid" src="/assets/images/01.png" alt="alternative"/>
                            </div> 
                        </div> 
                    </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div class="row">
                      <div class="col-lg-6 col-xl-6">
                          <div class="text-container">
                              <h2>Customer Support<br/><span class="blue"></span></h2>
                              <p class="p-large">The Cynergy quality management systems and employees emphasize, embrace and impact quality in all areas of customer support.</p>
                              <a class="btn-solid-lg" href="/cynergyus/about.html">Know More</a>
                          </div> 
                      </div> 
                      <div class="col-lg-6 col-xl-6">
                          <div class="image-container">
                              <img class="img-fluid" src="/assets/images/02.png" alt="alternative"/>
                          </div> 
                      </div> 
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="row">
                        <div class="col-lg-6 col-xl-6">
                            <div class="text-container">
                                <h2>Quality<br/><span class="blue"></span></h2>
                                <p class="p-large">Cynergy has earned a well deserved, respected reputation from global cellular manufactures and carriers as a quality provider of repair services for electronic devices and handsets.</p>
                                <a class="btn-solid-lg" href="/cynergyus/about.html">Know More</a>
                            </div> 
                        </div> 
                        <div class="col-lg-6 col-xl-6">
                            <div class="image-container">
                                <img class="img-fluid" src="/assets/images/03.png" alt="alternative"/>
                            </div> 
                        </div> 
                    </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class="row">
                        <div class="col-lg-6 col-xl-6">
                            <div class="text-container">
                                <h2>Value<br/><span class="blue"></span></h2>
                                <p class="p-large">Cynergy strives to provide the best possible value by being reliable and efficient through use of advanced technology and it.</p>
                                <a class="btn-solid-lg" href="/cynergyus/about.html">Know More</a>
                            </div> 
                        </div> 
                        <div class="col-lg-6 col-xl-6">
                            <div class="image-container">
                                <img class="img-fluid" src="/assets/images/04.png" alt="alternative"/>
                            </div> 
                        </div> 
                    </div> 
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
            
        </Fragment>

    );
  };