import React from 'react';
import style from '../scss/modules/hero.module.scss';
import rockets from '../images/rockets.png';
import FadeUp from './FadeUp';
import wave from '../images/svg/wave.svg'
import { Link  } from "react-scroll";


function Hero() {
  return (
    <div className={style.container}>

        <div className={style.info}>
            <h1>Vestibulum lectus mauris ultrices</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod tempor incididunt ut</p>

            <Link className={style.btn} to="contact-form" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Learn More</Link>
        </div>
   
        <FadeUp>
          <div className={style.heroImg}>
              <img src={rockets} alt="Rockets launching" />
          </div>
        </FadeUp>
    
        <div className={style.backgroundGradient}></div>

        <div className={style.wave}>
          <img src={wave} alt="Wave svg"/>
        </div>
    </div>
  );
}

export default Hero;
