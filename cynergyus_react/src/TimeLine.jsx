import react, {useState, Fragment } from 'react';
import $ from "jquery";
import PhotoSphere from './PhotoSphere.tsx';

const TimeLine = () => {

    const [activeMunic, setActiveMunic] = useState(null);

    
    const [lineProgressWidth, setLineProgressWidth] = useState("3%");


      

    



    const handleStep01Click = (event) => {
        
        setLineProgressWidth("3%");
        //setActiveVerkada("active");

        $(".step-cynergy").addClass("active");
        $(".step-cynergy").siblings().removeClass("active");
        
      };



    const handleStep02Click = (event) => {
        
        setLineProgressWidth("7%");
        //setActiveVerkada("active");

        $(".step-lg").addClass("active");
        $(".step-lg").siblings().removeClass("active");
        
      };



    const handleStep03Click = (event) => {
        
        setLineProgressWidth("13%");
        //setActiveVerkada("active");

        $(".step-cynergy-2").addClass("active");
        $(".step-cynergy-2").siblings().removeClass("active");
        
      };



    const handleStep04Click = (event) => {
        
        setLineProgressWidth("18%");
        //setActiveVerkada("active");

        $(".step-cynergy-one").addClass("active");
        $(".step-cynergy-one").siblings().removeClass("active");
        
      };


    const handleStep05Click = (event) => {
        
        setLineProgressWidth("24%");
        //setActiveVerkada("active");

        $(".step-cynergy-3").addClass("active");
        $(".step-cynergy-3").siblings().removeClass("active");
        
      };


    const handleStep06Click = (event) => {
        
        setLineProgressWidth("30%");
        //setActiveVerkada("active");

        $(".step-cynergy-4").addClass("active");
        $(".step-cynergy-4").siblings().removeClass("active");
        
      };


    const handleStep07Click = (event) => {
        
        setLineProgressWidth("36%");
        //setActiveVerkada("active");

        $(".step-zte").addClass("active");
        $(".step-zte").siblings().removeClass("active");
        
      };

    const handleStep08Click = (event) => {
        
        setLineProgressWidth("42%");
        //setActiveVerkada("active");

        $(".step-iso").addClass("active");
        $(".step-iso").siblings().removeClass("active");
        
      };

    const handleStep09Click = (event) => {
        
        setLineProgressWidth("48%");
  

        $(".step-t-mobile").addClass("active");
        $(".step-t-mobile").siblings().removeClass("active");
        
      };
      

    const handleStep10Click = (event) => {
        
        setLineProgressWidth("54%");
        //setActiveVerkada("active");

        $(".step-google").addClass("active");
        $(".step-google").siblings().removeClass("active");
        
      };


    const handleStep11Click = (event) => {
        
        setLineProgressWidth("60%");
        //setActiveVerkada("active");

        $(".step-iso-2").addClass("active");
        $(".step-iso-2").siblings().removeClass("active");
        
      };


    const handleStep12Click = (event) => {
        
        setLineProgressWidth("66%");
        //setActiveVerkada("active");

        $(".step-formlabs").addClass("active");
        $(".step-formlabs").siblings().removeClass("active");
        
      };


    const handleStep13Click = (event) => {

        setLineProgressWidth("72%");
        //setActiveVerkada("active");

        $(".step-glowforge").addClass("active");
        $(".step-glowforge").siblings().removeClass("active");
        
      };


    const handleStep14Click = (event) => {

        setLineProgressWidth("77%");
        //setActiveVerkada("active");

        $(".step-google-2").addClass("active");
        $(".step-google-2").siblings().removeClass("active");
        
      };


    const handleStep15Click = (event) => {

        setLineProgressWidth("82%");
        //setActiveVerkada("active");

        $(".step-tcl").addClass("active");
        $(".step-tcl").siblings().removeClass("active");
        
      };


    const handleStep16Click = (event) => {

        setLineProgressWidth("88%");
        //setActiveVerkada("active");

        $(".step-atel").addClass("active");
        $(".step-atel").siblings().removeClass("active");
        
      };

    const handleStep17Click = (event) => {

        setLineProgressWidth("95%");
        //setActiveVerkada("active");

        $(".step-verkada").addClass("active");
        $(".step-verkada").siblings().removeClass("active");
        
      };

    const handleStep18Click = (event) => {
        //console.log(event.target.data-data-id)
        setLineProgressWidth("100%");
        setActiveMunic("active");

        $(".step-munic").addClass("active");
        $(".step-munic").siblings().removeClass("active");
        
      };

    return (
    
        <Fragment>
            <div className="time">
                <div className="process-wrapper">
                    <div id="progress-bar-container">
                        <ul>
                            <li className="step step01 active step-cynergy" onClick={handleStep01Click}><img src="./src/assets/Clients Icons/cyn-icon.svg" className="time-logo"/><div className="step-inner">1999</div></li>
                            <li className="step step02 step-lg" onClick={handleStep02Click}><img src="./src/assets/Clients Icons/lg-icon.svg" className="time-logo"/><div className="step-inner">2001</div></li>
                            <li className="step step03 step-cynergy-2" onClick={handleStep03Click}><img src="./src/assets/Clients Icons/cyn-icon.svg" className="time-logo"/><div className="step-inner">2004</div></li>
                            <li className="step step04 step-cynergy-one" onClick={handleStep04Click}><img src="./src/assets/Clients Icons/cyn-one-icon.svg" className="time-logo"/><div className="step-inner">2005</div></li>
                            <li className="step step05 step-cynergy-3" onClick={handleStep05Click}><img src="./src/assets/Clients Icons/cyn-icon.svg" className="time-logo"/><div className="step-inner">2007</div></li>
                            <li className="step step06 step-cynergy-4" onClick={handleStep06Click}><img src="./src/assets/Clients Icons/cyn-icon.svg" className="time-logo"/><div className="step-inner">2010</div></li>
                            <li className="step step07 step-zte" onClick={handleStep07Click}><img src="./src/assets/Clients Icons/zte-icon.svg" className="time-logo"/><div className="step-inner">2011</div></li>
                            <li className="step step08 step-iso" onClick={handleStep08Click}><img src="./src/assets/Clients Icons/iso-icon.svg" className="time-logo"/><div className="step-inner">2013</div></li>
                            <li className="step step09 step-t-mobile" onClick={handleStep09Click}><img src="./src/assets/Clients Icons/t-mobile-logo.svg" className="time-logo"/><div className="step-inner">2014</div></li>
                            <li className="step step10 step-google" onClick={handleStep10Click}><img src="./src/assets/Clients Icons/google.svg" className="time-logo"/><div className="step-inner">2016</div></li>
                            <li className="step step11 step-iso-2" onClick={handleStep11Click}><img src="./src/assets/Clients Icons/iso-icon.svg" className="time-logo"/><div className="step-inner">2018</div></li>
                            <li className="step step12 step-formlabs" onClick={handleStep12Click}><img src="./src/assets/Clients Icons/formlabs.svg" className="time-logo"/><div className="step-inner">2019</div></li>
                            <li className="step step13 step-glowforge" onClick={handleStep13Click}><img src="./src/assets/Clients Icons/block-forge-icon.svg" className="time-logo"/><div className="step-inner">2019</div></li>
                            <li className="step step14 step-google-2" onClick={handleStep14Click}><img src="./src/assets/Clients Icons/google.svg" className="time-logo"/><div className="step-inner">2020</div></li>
                            <li className="step step15 step-tcl" onClick={handleStep15Click}><img src="./src/assets/Clients Icons/tcl-icon-14.svg" className="time-logo"/><div className="step-inner">2020</div></li>
                            <li className="step step16 step-atel" onClick={handleStep16Click}><img src="./src/assets/Clients Icons/atel.svg" className="time-logo"/><div className="step-inner">2020</div></li>
                            <li className="step step17 step-verkada" onClick={handleStep17Click}><img src="./src/assets/Clients Icons/verkada-icon.svg" className="time-logo"/><div className="step-inner">2021</div></li>
                            <li data-id='cyn1'  className="step step18 munic" onClick={handleStep18Click}><img src="./src/assets/Clients Icons/munic-icon.svg" className="time-logo"/><div className="step-inner">2021</div></li>
                        </ul>
                        
                        <div id="line">
                            <div id="line-progress" style={{ width: lineProgressWidth }}></div>
                        </div>
                    </div>
        
                    <div id="progress-content-section">
                        <div className="section-content step-cynergy active">
                            <h2>Cynergy</h2>
                            <p>Established in 1999 in Atlanta, Georgia
                
                            Cynergy expands into the mobile phone repair market as an efficient and cost-effective troubleshooter. New customers include manufacturers such as Mitsubishi and LG Electronics.</p>
                        </div>
                    
                        <div className="section-content step-lg">
                            <h2>LG</h2>
                            <p>Due to continuous growth in business, Cynergy has expanded to a larger, state of the art facility in Grapevine TX.
                
                            While maintaining top customer satisfaction and reliability, Cynergy continues to thrive and establishes a relationship with T-Mobile, and has acquired both their in warranty and out of warranty business.</p>
                        </div>
                        
                        <div className="section-content step-cynergy-2">
                            <h2>Cynergy</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
                        </div>
                        
                        <div className="section-content step-cynergy-one">
                            <h2>Cynergy One</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
                        </div>
                        
                        <div className="section-content step-cynergy-3">
                            <h2>Cynergy</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque justo, consequat non fermentum ac, tempor eu turpis. Proin nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla in dapibus lorem. Suspendisse vitae velit ac ante consequat placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex consequat eu. Praesent pulvinar tincidunt leo et condimentum. Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem odio, venenatis at ex a, lacinia suscipit orci.</p>
                        </div>
                
                        <div className="section-content step-cynergy-4">
                            <h2>Cynergy</h2>
                            <p>Cynergy’s competitive prices and industry-leading quality drives overall growth requiring a larger facility to meet ongoing customers’ demands.<br/><br/>
                
                            Cynergy now has the ability to process over 15,000 mobile devices a day.</p>
                        </div>
                
                        <div className="section-content step-zte">
                            <h2>ZTE</h2>
                            <p>Cynergy successfully initiates a Fort Worth, Texas location featuring an industry-leading turn-around time.<br/><br/>
                
                            ZTE USA, headquartered in Richardson, Texas, is a subsidiary of ZTE Corporation, a global provider of mobile devices, telecommunication systems, and enterprise solutions.
                            
                            ZTE is ranked by independent industry analysts as the fourth-largest supplier of mobile devices in the U.S. overall, and second-largest supplier of prepaid devices.</p>
                        </div>
                
                        <div className="section-content step-iso">
                            <h2>ISO</h2>
                            <p>Cynergy is registered as ISO 9001-2008 certified.<br/><br/>
                
                            Cynergy conforms to the Quality Management System requirements for: Electronic repair of components for cellular phones.Cynergy 1 LLC software package, a private-label IT logistics system for production line management unique to the industry. Cynery is assigned certification number: QMS: 1156.</p>
                        </div>
                        
                        <div className="section-content step-t-mobile">
                            <h2>T Mobile</h2>
                            <p>Due to continuous growth in business, Cynergy has expanded to a larger, state of the art facility in Grapevine TX.<br/><br/>
                
                            While maintaining top customer satisfaction and reliability, Cynergy continues to thrive and establishes a relationship with T-Mobile, and has acquired both their in warranty and out of warranty business.</p>
                        </div>
                
                        <div className="section-content step-google">
                            <h2>Google</h2>
                            <p>Cynergy has proudly established business with Google, working with their first cellphone development, Google Pixel.<br/><br/>
                
                            These powerful and reliable devices have one of the best-rated smartphone cameras. Pixel handsets are fully integrated with Google's search services and Google Assistant.</p>
                        </div>
                
                        <div className="section-content step-iso-2">
                            <h2>Iso</h2>
                            <p> Cynergy successfully updates its quality management system to comply with ISO 9001:2015 standards.<br/><br/>
                
                            Cynergy conforms to the Quality Management System requirements for the provision of warranty services, re-manufacturing, and repair of mobile phones and other electronic devices across a broad spectrum of manufacturers and their product retailers.</p>
                        </div>
                
                        <div className="section-content step-formlabs">
                            <h2>Formlabs</h2>
                            <p> Formlabs manufactures SLA and SLS 3D printers and is expanding access to digital fabrication, so anyone can make anything. Their products are used in a variety of fabrication settings including engineering, manufacturing, education, entertainment, jewelry making, dental, and medical and is headquartered in Somerville, Massachusetts.</p>
                        </div>
                
                        <div className="section-content step-glowforge">
                            <h2>Glowforge</h2>
                            <p> Cynergy has expanded its excellent re-manufacturing abilities to the 3D and Laser Printing industry by establishing business with Glowforge.<br/><br/>
                
                            Glowforge Inc. manufactures 3D laser printers. Its products are used to shape leather, sculpt wood, slice acrylic, cut paper, form foam, trim fabric, engrave glass, and etch metal. The company was incorporated in 2014 and is based in Seattle, Washington.</p>
                        </div>
                        
                        <div className="section-content step-google-2">
                            <h2>Google</h2>
                            <p> With Cynergy recognized as the world's largest Google ASP, Cynergy was awarded the Google Non-Phone hardware contract and product line. Our scope provides customer data information protection from returned hardware products and offers repair level services for refurbished products for fulfillment and advanced replacements.</p>
                        </div>
                
                        <div className="section-content step-tcl">
                            <h2>TCL</h2>
                            <p> TCL designs, develops, manufactures and sells products including television sets, mobile phones, air conditioners, washing machines, refrigerators and small electrical appliances. In 2010 it was the world's 25th-largest consumer electronics producer. Since 2015, it remains the third-largest television manufacturer by market share. TCL’s mobile phones include Alcatel, Thomson and BlackBerry.</p>
                        </div>
                
                        <div className="section-content step-atel">
                            <h2>Atel</h2>
                            <p>Asiatelco Technologies Co. (ATEL) is a leading provider of wireless terminal products to its value customers worldwide. Its innovative products and solutions are widely used for reliable broadband access, IoT/M2M applications and voice communication with 4G LTE, 3G UMTS/EVDO and 2G CDMA/GSM wireless technologies.</p>
                        </div>
                
                        <div className="section-content step-verkada">
                            <h2>Verkada</h2>
                            <p>Verkada Inc. is a San Mateo, CA-based company that develops cloud-based building security systems. The company combines security equipment such as video cameras, access control systems and environmental sensors, with cloud based machine vision and artificial intelligence. The company was founded in 2016.</p>
                        </div>
                
                        <div className="section-content step-munic">
                            <h2>Munic</h2>
                            <p>Munic is a leading vehicle data collection, processing and monetization company in Europe and North America.</p>
                        </div>
        
        
                    </div>
                </div>
            </div>
            <div className='spacing'>

            </div>
        </Fragment>
  
  
  




    );
}
  
export default TimeLine;