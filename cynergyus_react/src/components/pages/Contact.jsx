import React, { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Contact = () => {


    return (
        <Fragment> 
                <div id="contact" class="form">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="white-box">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h2>CONTACT</h2>
                                            <ul class="list-unstyled li-space-lg">
                                                <li class="address">Don't hesitate to give us a call or just use the contact form below</li>
                                                <li><i class="fas fa-map-marker-alt"></i>4055 Corporate Dr, Grapevine, TX 76051</li>
                                                <li><i class="fas fa-phone"></i><a class="blue" href="tel:003024630820">1-817-591-4600</a></li>
                                                <li><i class="fas fa-envelope"></i><a class="blue" href="mailto:office@leno.com">service@cynergyus.com</a></li>
                                            </ul>
                                        </div> 
                                    </div> 
                                    <div class="row">
                                        
                                        <form id="contactForm" data-toggle="validator" data-focus="false">
                                            <div class="form-group">
                                                <input type="text" class="form-control-input" id="cname" required/>
                                                <label class="label-control" for="cname">Name</label>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control-input" id="cemail" required/>
                                                <label class="label-control" for="cemail">Email</label>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                            <div class="form-group">
                                                <textarea class="form-control-textarea" id="cmessage" required></textarea>
                                                <label class="label-control" for="cmessage">Your message</label>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                            <div class="form-group checkbox">
                                                <input type="checkbox" id="cterms" value="Agreed-to-Terms" required/>I have read and agree to Leno's stated conditions in <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                                                <div class="help-block with-errors"></div>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit" class="form-control-submit-button">SUBMIT MESSAGE</button>
                                            </div>
                                            <div class="form-message">
                                                <div id="cmsgSubmit" class="h3 text-center hidden"></div>
                                            </div>
                                        </form>
                                      
                                    </div> 
                                </div>
                                
                            </div>
                            <div class="col-md-6">
                                

                            </div>
                        </div>
                        
                    </div> 
                </div> 
        </Fragment>

    );
  };