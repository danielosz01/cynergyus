import React, { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";




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
                                        
                                        <Link to={'/services'} class="footer-link" href="/cynergyus/services.html">Services</Link>
                                    </li>
                                    <li class="media">
                                        
                                        <Link to={'software'} class="footer-link" href="/cynergyus/software.html">Software</Link>
                                    </li>
                                    <li class="media">
                                        
                                        <Link to={'/videos'} class="footer-link" href="/cynergyus/videos.html">Videos</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <div class="col-md-3">
                            <div class="footer-col middle">
                                <h4>About</h4>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        
                                        <Link to={'/about'} class="footer-link" href="/cynergyus/about.html">About</Link>
                                    </li>
                                    <li class="media">
                                        
                                        <Link to={'/contact'} class="footer-link" href="/cynergyus/contact.html">Contact</Link>
                                    </li>
                                    <li class="media">
                                        
                                        <Link to={'/responsibility'} class="footer-link" href="/cynergyus/responsibility.html">Responsibility</Link>
                                    </li>     
                                </ul>
                            </div>
                        </div> 
                        <div class="col-md-3">
                            <div class="footer-col middle">
                                <h4>Company</h4>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        
                                        <Link to={'/iso'} class="footer-link" href="/cynergyus/iso.html">Iso</Link>
                                    </li>
                                    <li class="media">
                                        
                                        <Link to={'quality'} class="footer-link" href="/cynergyus/quality-policy.html">Quality</Link>
                                    </li>
                                    <li class="media">
                                        
                                        <Link to={'capability'} class="footer-link" href="/cynergyus/capability.html">Capability</Link>
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
                            <p class="p-small">Copyright © Cynergy 2023</p>
                        </div> 
                    </div>
                </div> 
            </div> 
        </Fragment>

    );
  };