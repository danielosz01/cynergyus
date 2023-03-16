import React, { Fragment } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const ContactSectionHome = () => {


    return (
        <Fragment> 
            <div class="contact-section-home">
                <div class="container">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <h5 class="card-title">Brillant solutions for your ideas</h5>
                                    <p class="card-text">Build modern looking ERP solutions fast and easy using Quick</p>
                                </div>
                                <div class="col-md-6">
                                    <a class="btn-solid-reg" href="/cynergyus/contact.html"><i>Contact</i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
  };