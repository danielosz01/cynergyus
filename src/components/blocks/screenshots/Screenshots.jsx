import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';



import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

SwiperCore.use([Pagination, Autoplay]);


export const Screenshots = () => {


    return (
        <Fragment>
          <div className="screenshots">
            

            <div classNameName="container">
            <div class="container">
              <div class="col-lg-6">
                  <div class="text-container">
                      <a class="sm-screenshots-btn" href="/cynergyus/videos.html">Videos</a>
                      <p>Cynergy one is an ERP software, privately developed to meet complex requeriments of manufacturing and reverse logistics business based on more than 15 years of Cynergy's experience in the industry.</p>
                  </div> 
                </div> 
              </div>
              <Swiper
                  breakpoints={{
                      640: {
                          slidesPerView: 1,
                          spaceBetween: 0
                      },
                      768: {
                          slidesPerView: 1,
                          spaceBetween: 0
                      },
                      1024: {
                          slidesPerView: 2,
                          spaceBetween: 5
                      },
                      1280: {
                          slidesPerView: 3,
                          spaceBetween: 10
                      },
                      1924: {
                          slidesPerView: 4,
                          spaceBetween: 20
                      }
                      }}

                  spaceBetween={50}

                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                  className="slider-2"
                  
                  
                  >
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="slider-container">
                                <div className="swiper-container image-slider">
                                    <div className="swiper-wrapper">
                          <SwiperSlide>
                              
                                  <img className="img-fluid" src="src/assets/images/Default.png" alt="alternative" data-toggle="modal" 
                                  data-target="#modal1"/>
                              
                          </SwiperSlide>
                          <SwiperSlide>
                              
                              <img className="img-fluid" src="src/assets/images/receiving.jpg" alt="alternative" data-toggle="modal" 
                                  data-target="#modal2"/>
                          </SwiperSlide>
                          <SwiperSlide>
                              <img className="img-fluid" src="src/assets/images/Default-1.png" alt="alternative" data-toggle="modal" 
                                  data-target="#modal3"/>
                          </SwiperSlide>
                          <SwiperSlide>
                              <img className="img-fluid" src="src/assets/images/Default-2.png" alt="alternative" data-toggle="modal" 
                                  data-target="#modal4"/>
                          </SwiperSlide>
                                        
                                        
                        </div> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
              </Swiper>
            </div> 

         
            <div class="modal fade" id="modal1">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <video controls width="100%" autoplay>
                                <source src="http://www.cynergyus.com/videos/Services.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            
  
            <div class="modal fade" id="modal2">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <video controls width="100%" autoplay="false">
                                <source src="http://www.cynergyus.com/videos/Software.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>

  
            <div class="modal fade" id="modal3">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <video controls width="100%" autoplay="false">
                                <source src="http://www.cynergyus.com/videos/Repair/Repair(High Quality).mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal4">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <video controls width="100%" autoplay="false">
                                <source src="http://www.cynergyus.com/videos/Testing/Testing-High.mp4" type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </Fragment>

    );
  };