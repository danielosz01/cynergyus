import React, { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const AboutUsSection = () => {


    return (
        <Fragment> 
            <div className="about">
                <div className="container">
                    <div className="spacing"></div>

                    

                    <div className="contact-bar">
                        
                            <div className="card">
                                <div className="card-body">
                                    
                                        
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="square"></div>
                                                </div>
                                                <div className="col-10">
                                                    <h5 className="card-title">Know more about Cynergy</h5>
                                                </div>
                                            </div>
                                            
                        
                                    
                                    
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>




            <div className="container">
                
                <div id="receiving" className="video-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <img className="img-fluid" src="/assets/images/vreceiving.png" alt="alternative" data-toggle="modal" 
                                data-target="#modal1"/>
                            </div> 
                            <div className="col-lg-8">
                                <div className="text-container">
                                    <div className="spacing2"></div>
                                    
                                    
                                    <p>Established in 1999 in Atlanta, Georgia, Cynergy has grown into one of the leading reverse logistics companies in the industry. Cynergy specializes in warranty services, manufacturing and re-manufacturing of 5G, LTE, GSM, and CDMA2000 mobile phones as well as devices such as Tablets, 3D printers and Laser printers. <br/><br/>Cynergy’s experienced management and technical staff is the culmination of a worldwide recruiting and training effort.Cynergy’s satisfied end-user customers include Google, Glowforge, Formlabs, T-Mobile, HTC, ZTE, NEC, Pantech, Huawei and Quality One.</p>
                    
                                </div> 
                            </div> 
                        </div> 
                    </div>
                </div> 
            
                <hr></hr>
            </div>
        </Fragment>

    );
  };