import React, { Fragment } from "react";

import { Header } from '../blocks/header/Header'
import { Counter } from '../blocks/counter/Counter.jsx'
import { WelcomeVideo } from '../blocks/welcomeVideo/WelcomeVideo.jsx'
import { ClientsCarousel } from '../blocks/clientsCarousel/ClientsCarousel.jsx'
import { Basics3 } from '../blocks/basics/Basics3.jsx'
import { Basics2 } from '../blocks/basics/Basics2.jsx'
import { Screenshots } from '../blocks/screenshots/Screenshots.jsx'
import { Services } from '../blocks/services/Services.jsx'
import { ContactSectionHome } from '../blocks/contact/ContactSectionHome.jsx'
import { Tween } from "jquery";


export const Home = () => {


    return (
        <Fragment> 
            <Header></Header>
            <Counter></Counter>
            <WelcomeVideo></WelcomeVideo>
            <Basics3></Basics3>
            <ClientsCarousel></ClientsCarousel>
            <Basics2></Basics2>
            <Screenshots></Screenshots>
            <Services></Services>
            <ContactSectionHome></ContactSectionHome>
        </Fragment>

    );
  };