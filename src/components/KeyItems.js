import React from 'react';
import style from '../scss/modules/keyitems.module.scss';
import Form from './Form';
import meteor from '../images/svg/meteor.svg';
import plane from '../images/svg/plane.svg';
import rocket from '../images/svg/rocket.svg';
import astro from '../images/svg/astro.svg';
import signal from '../images/svg/signal.svg';
import satellite from '../images/svg/satellite.svg';
import FadeUp from './FadeUp';

function Key() {
  return (
    <div className={style.container}>
 
          <h2>Dignissim suspendisse inest ante</h2>
            <div className={style.itemContainer}>
                <div className={style.info}>
                    <div className={style.wrap}>
                      <div className={style.icon}>
                        <img className={style.iconItem} src={rocket} alt="Rocket svg" />
                      </div>
                        <h4 className={style.iconTitle}>Nulla</h4>
                    </div>

                    <div className={style.wrap}>
                      <div className={style.icon}>
                      <img className={style.iconItem} src={astro} alt="Astronaut svg" />
                      </div>
                        <h4 className={style.iconTitle}>Justo Eget</h4>
                    </div>

                    <div className={style.wrap}>
                      <div className={style.icon}>
                      <img className={style.iconItem} src={signal} alt="Signal svg" />
                      </div>
                        <h4 className={style.iconTitle}>Sed Sed</h4>
                    </div>

                    <div className={style.wrap}>
                      <div className={style.icon}>
                      <img className={style.iconItem} src={satellite} alt="Satellite svg" />
                      </div>
                        <h4 className={style.iconTitle}>Ipsum</h4>
                    </div>

                    <div className={style.wrap}>
                      <div className={style.icon}>
                        <img className={style.iconItem} src={meteor} alt="Meteor svg" />
                      </div>
                        <h4 className={style.iconTitle}>Mattis Nunc</h4>
                    </div>

                    <div className={style.wrap}>
                      <div className={style.icon}>
                        <img className={style.iconItem} src={plane} alt="Plane svg" />
                      </div>
                        <h4 className={style.iconTitle}>Elit Pellentesque</h4>
                    </div>
                </div>
              
     
                  <div id="contact-form" className={style.formContainer}>
                    <FadeUp>
                      <Form />
                    </FadeUp>  
                  </div>
             
            </div>
    
    </div>
  );
}

export default Key;
