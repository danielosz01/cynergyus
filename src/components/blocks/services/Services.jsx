import React, { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Services = () => {


    return (
        <Fragment> 
            <div class="services">
                <div class="container">
                    <a class="sm-detail-btn" href="/cynergyus/services.html">Our services</a>
                    <h3>World class services we provide</h3>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="card">
                                <img src="/assets/images/page-quality-svgrepo-com.svg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">Quality Policy</h5>
                                <p class="card-text">Cynergy is commited to strive to meet or exceed the...</p>
                                
                                </div>
                            </div>
                        </div> 
                        <div class="col-md-3">
                            <div class="card">
                                <img src="/assets/images/content-management-svgrepo-com (1).svg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">Capability</h5>
                                <p class="card-text">Cynergy is an exceptional, electronics service provider...</p>
                                
                                </div>
                            </div>
                        </div> 
                        <div class="col-md-3">
                            <div class="card">
                                <img src="/assets/images/Charts 2.svg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">Responsibility</h5>
                                <p class="card-text">The adaptation of SMART business goals and uti...</p>
                                
                                </div>
                            </div>
                        </div> 
                        <div class="col-md-3">
                            <div class="card">
                                <img src="/assets/images/color.svg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h5 class="card-title">ISO</h5>
                                <p class="card-text">Cynergy has earned certification to ISO 9001:2015.</p>
                                
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>
        </Fragment>

    );
  };