import React, { Fragment } from "react";
import $ from "jquery";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const WelcomeVideo = () => {


    return (
        <Fragment> 
            <div id="preview" class="basic-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Ready to manage things better?</h2>
                            <div class="p-heading p-large">Connect with us and join the journey</div>
                        </div> 
                    </div> 
                    <div class="row">
                        <div class="col-lg-12">
                            
                            <a href="https://drive.google.com/file/d/13_00jrB7EaKAQHPuyyBQzHEATVpQYUP8/view?usp=share_link">
                                <span class="video-play-button">
                                    <span></span>
                                </span>
                            </a>
                            
                        </div> 
                    </div> 
                </div> 
            </div> 
        </Fragment>

    );
  };