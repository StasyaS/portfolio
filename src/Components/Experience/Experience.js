import "../../styles/experience.scss";
import shutterstockVideo from './images/shutterstock.mp4';

import git from './images/git.png';
import donkey from './images/donkey.png';
import hec_visuals_covid from './images/hec_visuals_covid.png';
import swimm from './images/swimm.jpg';
import restaurant from './images/restaurant-pos-en.webp';

import ReactPlayer from 'react-player'
import { useEffect, useRef, useState } from "react";

function Experience() {
    const videoRef = useRef(null);
    const [canAutoplay, setCanAutoplay] = useState(false);

    useEffect(() => {
      // Check if the video can be autoplayed without user interaction
      const testAutoplay = () => {
        const promise = videoRef.current.play();
        if (promise !== undefined) {
          promise
            .then(() => {
              // Autoplay is allowed, set the state to true
              setCanAutoplay(true);
            })
            .catch((error) => {
              // Autoplay is not allowed, handle it accordingly
              setCanAutoplay(false);
            });
        }
      };
      testAutoplay();
    }, []);

    return (
        <div className="background">
            <h1>
                Gallery
            </h1>
            <div className="video">
                 <a href="https://rrtalberta.ca/" className="main_project" target="_blank">
                    <video ref={videoRef} muted>
                        <source src={shutterstockVideo} type="video/mp4" />
                    </video>
                </a> 
                <div className="hover">
                    <div className="hover_block">
                        Respiratory therapists
                        <p>
                            CRTA provides therapeutic and diagnostic procedures to patients requiring basic and advanced cardiopulmonary services.
                        </p>
                    </div>
                </div>
            </div>
               
            <div className="container_profile">
                <div className="box">
                    <a href="https://don-key.finance/" target="_blank">
                        <img src={ donkey} />
                    </a>
                    <span>
                        Interacting with DeFi platforms
                    </span>
                </div>
                <div className="box">
                    <a href="https://aquapolis.ua/" target="_blank">
                        <img src={swimm} />
                    </a>
                    <span>Leader in the pool sales market</span>
                </div>
                <div className="box">
                    <a href="https://www.healthcareexcellence.ca/" target="_blank">
                        <img src={hec_visuals_covid} />
                    </a>
                    <span>Everyone in Canada has high-quality healthcare</span>
                </div>
                <div className="box">
                    <a href="http://joinposter.com/en" target="_blank">
                        <img src={restaurant} />
                    </a>
                    <span>Manage your finances with Poster’s feature-rich Android, iPad POS system</span>
                </div>
            </div>
        </div>
    )
}

export default Experience;

