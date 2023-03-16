import React, { Fragment } from "react";
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export const VideoDescriptionR = (props) => {


    return (
        <Fragment> 
                <div id="receiving" class="video-description-r">
                    <div class="container">
                        
                            <div class="row">
                                <div class="col-md-6 col-img">
                                    <img src={props.imageUrl} alt="alternative" data-toggle="modal" 
                                    data-target="#modal2"/>
                                </div> 
                                <div class="col-md-6 col-text">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h3>{props.title}</h3>
                                            <p>{props.description}</p>
                                        </div>
                                    </div>
                                </div> 
                                
                            </div> 
                        
                    </div> 
                </div> 
        </Fragment>

    );
  };