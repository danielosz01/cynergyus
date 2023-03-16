import React, { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Basics2 = () => {


    return (
        <Fragment> 
            <div id="details" className="basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="img-fluid" src="src/assets/images/Contact.png" alt="alternative"/>
                        </div> 
                        <div className="col-lg-6">
                            <div className="text-container">
                                <a className="sm-detail-btn" href="/cynergyus/software.html">Software</a>
                                <h3>Provide the best digital experiences</h3>
                                <p>Cynergy one is an ERP software, privately developed to meet complex requeriments of manufacturing and reverse logistics business based on more than 15 years of Cynergy's experience in the industry.</p>
                                <a className="btn-solid-reg" href="/cynergyus/software.html"><i>Know More</i><i className="fa-sharp fa-solid fa-arrow-right"></i></a>
                            </div> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </Fragment>

    );
  };