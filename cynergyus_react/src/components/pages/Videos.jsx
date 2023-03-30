import React, { Fragment } from "react";
import { VideoDescriptionL } from "../blocks/videoDescription/VideoDescriptionL";
import { VideoDescriptionR } from "../blocks/videoDescription/VideoDescriptionR";

import { videosData } from "../../utils/constants";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export const Videos = () => {


    return (
        <Fragment> 
                <div class="spacing"></div>

                <div >
                    {videosData.map((video, id) => {
                        return <VideoDescriptionL key={id} {...video} ></VideoDescriptionL>;
                    })}
                </div>
           
        </Fragment>

    );
  };