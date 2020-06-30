import React from 'react';
import style from '../scss/modules/about.module.scss';
import rocket from '../images/svg/rocket.svg';
import astro from '../images/svg/astro.svg';
import satellite from '../images/svg/satellite.svg';
import toTheMoon from '../images/to-the-moon.png'
import FadeUp from './FadeUp';


function About() {
  return (
    <div className={style.container}>
        <h2>Lobortis mattis aliquam faucibus</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        <div className={style.info}>

            <div className={style.wrap}>
              <div className={style.icon}>
                <img className={style.iconItem} src={astro} alt="Astro svg" />
              </div>
                <h4 className={style.iconTitle}>Justo Eget</h4>
                <p className={style.iconContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh praesent tristique magna.</p>
            </div>

            <div className={style.wrap}>
              <div className={style.icon}>
                <img className={style.iconItem} src={satellite} alt="Satellite svg" />
              </div>
                <h4 className={style.iconTitle}>Ipsum</h4>
                <p className={style.iconContent}>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tempus urna et pharetra pharetra. Proin nibh nisl condimentum id.</p>
            </div>

            <div className={style.wrap}>
              <div className={style.icon}>
                <img className={style.iconItem} src={rocket} alt="Rocket svg" />
              </div>
                <h4 className={style.iconTitle}>Nulla</h4>
                <p className={style.iconContent}>Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Volutpat commodo sed egestas egestas fringilla phasellus.</p>
            </div>
    
        </div>
     
        <FadeUp>
          <div className={style.moonContainer}>
              <img className={style.moonImg} src={toTheMoon} alt="Landing on the Moon" />
          </div>
        </FadeUp>

    </div>
  );
}

export default About;
