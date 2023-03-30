import React, { Fragment, memo } from "react";
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export const VideoDescriptionL = memo(({ title, description, image, className }) => {


    return (
        <Fragment> 
                <div id="receiving" class={className} >
                    <div class="container">
                        
                            <div class="row">
                                <div class="col-md-6 col-text">
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </div> 
                                <div class="col-md-6 col-img">
                                    <img src={image} alt="alternative" data-toggle="modal" 
                                    data-target="#modal2"/>
                                </div> 
                                
                            </div> 
                        
                    </div> 
                </div> 
        </Fragment>

    );
  });