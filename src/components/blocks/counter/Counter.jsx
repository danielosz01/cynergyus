import React, { Fragment } from "react";
import $ from "jquery";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


  /* Counter - CountTo */
  var a = 0;
  $(window).scroll(function() {
      if ($('#counter').length) { // checking if CountTo section exists in the page, if not it will not run the script and avoid errors	
          var oTop = $('#counter').offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-value').each(function() {
              var $this = $(this),
              countTo = $this.attr('data-count');
              $({
              countNum: $this.text()
              }).animate({
                  countNum: countTo
              },
              {
                  duration: 2000,
                  easing: 'swing',
                  step: function() {
                  $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
                  }
              });
          });
          a = 1;
          }
      }
  });



export const Counter = () => {


    return (
        <Fragment> 
            <div className="counter" id="counter">
                <div className="container">
                    <div className="head">
                        <div>
                            <h5>
                                Impresive modules and features
                            </h5>
                            <p>
                                Start building fast, beautiful and modern looking ERP solutions.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="cell">
                                    <div className="counter-value number-count" data-count="231">1</div>
                                    <p className="counter-info">Happy Users</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div className="card">
                                <div className="cell">
                                    <div className="counter-value number-count" data-count="85">1</div>
                                    <p className="counter-info">Issues Solved</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div className="card">
                                <div className="cell">
                                    <div className="counter-value number-count" data-count="59">1</div>
                                    <p className="counter-info">Good Reviews</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-3">
                            <div className="card">
                                <div className="cell">
                                    <div className="counter-value number-count" data-count="127">1</div>
                                    <p className="counter-info">Case Studies</p>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        </Fragment>

    );
  };