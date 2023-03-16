import React, { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




export const Footer = () => {


    return (
        <Fragment> 
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="footer-col">
                                
                                <a class="logo-image" href="index.html"><img src="/src/assets/images/logo.svg" alt="alternative"/></a>
                                <p>Cynergy strives to provide the best possible value by being reliable and efficient through use of advanced technology and IT</p>
                            </div>
                            <div class="footer-icons">
                                <span class="fa-stack">
                                    <a href="https://www.youtube.com/channel/UC_QvKaR6V43Q573VTKAFKtg/videos">
                                        
                                        <i class="fa-brands fa-youtube"></i>
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="#your-link">
                                        
                                        <i class="fa-brands fa-facebook"></i>
                                    </a>
                                </span>
                                <span class="fa-stack">
                                    <a href="https://www.linkedin.com/company/cynergyus">
                                        
                                        <i class="fa-brands fa-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                        </div> 
                        <div class="col-md-3">
                            <div class="footer-col middle">
                                <h4>Quick Links</h4>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        
                                        <a class="footer-link" href="/cynergyus/services.html">Services</a>
                                    </li>
                                    <li class="media">
                                        
                                        <a class="footer-link" href="/cynergyus/software.html">Software</a>
                                    </li>
                                    <li class="media">
                                        
                                        <a class="footer-link" href="/cynergyus/videos.html">Videos</a>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <div class="col-md-3">
                            <div class="footer-col middle">
                                <h4>About</h4>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        
                                        <a class="footer-link" href="/cynergyus/about.html">About</a>
                                    </li>
                                    <li class="media">
                                        
                                        <a class="footer-link" href="/cynergyus/contact.html">Contact</a>
                                    </li>
                                    <li class="media">
                                        
                                        <a class="footer-link" href="/cynergyus/responsibility.html">Responsibility</a>
                                    </li>     
                                </ul>
                            </div>
                        </div> 
                        <div class="col-md-3">
                            <div class="footer-col middle">
                                <h4>Company</h4>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        
                                        <a class="footer-link" href="/cynergyus/iso.html">Iso</a>
                                    </li>
                                    <li class="media">
                                        
                                        <a class="footer-link" href="/cynergyus/quality-policy.html">Quality</a>
                                    </li>
                                    <li class="media">
                                        
                                        <a class="footer-link" href="/cynergyus/capability.html">Capability</a>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div> 

            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="p-small">Copyright © Cynergy 2023 <a href="">Inovatik</a></p>
                        </div> 
                    </div>
                </div> 
            </div> 
        </Fragment>

    );
  };