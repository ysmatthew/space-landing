import React from 'react';
import style from '../scss/modules/features.module.scss';
import launch from '../images/launch.png';
import arrive from '../images/arrive.png';
import astronaut from '../images/astronaut.png';
import FadeUp from './FadeUp';

function Features() {

  return (
    <div className={style.container}>

        <div className={style.itemOne}>
            <FadeUp>             
                <div className={style.imgWrap}>
                    <img src={launch} alt="Rocket launch day" />
                </div>
            </FadeUp>
            <div className={style.itemContent}>
                <h4>Pretium Lectus</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae tortor condimentum lacinia quis. Proin sed libero enim sed. Leo vel orci porta non pulvinar neque laoreet.</p>
            </div>
        </div>
    
    
        <div className={style.itemTwo}>
            <FadeUp>  
                <div className={style.imgWrap}>
                    <img src={arrive} alt="Astronaut arriving" />
                </div>
            </FadeUp>
            <div className={style.itemContent}>
                <h4>Consequat Nisl</h4>
                <p>Enim neque volutpat ac tincidunt vitae. Tincidunt dui ut ornare lectus sit. Aliquet nec ullamcorper sit amet risus nullam eget. Risus feugiat in ante metus dictum. Viverra nam libero justo laoreet sit amet cursus sit amet.</p>
                <p>
                Quam vulputate dignissim suspendisse in est ante in nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>


        <div className={style.itemThree}>
            <FadeUp>   
                <div className={style.imgWrap}>
                    <img src={astronaut} alt="Astronaut with flags" />
                </div>
            </FadeUp>
            <div className={style.itemContent}>
                <h4>Euismod Nisi</h4>
                <p>Vitae tortor condimentum lacinia quis. Proin sed libero enim sed. Leo vel orci porta non pulvinar neque laoreet. Enim neque volutpat ac tincidunt vitae. Tincidunt dui ut ornare lectus sit. Aliquet nec ullamcorper sit amet risus nullam eget. Risus feugiat in ante metus dictum. </p>
            </div>
        </div>
        
        
    </div>
  );
}

export default Features;
