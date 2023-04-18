import React, { Fragment } from "react";

import { PhotoSphere } from '../sphere/PhotoSphere.tsx'
import { AboutUsSection } from '../blocks/aboutUsSection/AboutUsSection.jsx'

export const AboutPage = () => {


    return (
        <Fragment>
            <AboutUsSection ></AboutUsSection> 
            <PhotoSphere></PhotoSphere>
        </Fragment>

    );
  };