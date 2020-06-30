import React from 'react';
import style from '../scss/modules/main.module.scss';
import Hero from './Hero';
import KeyItems from './KeyItems';
import About from './About';
import Features from './Features';


function Main() {
  return (
    <div className={style.container}>
      <Hero />
      <KeyItems />
      <About />
      <Features />
    </div>
  );
}

export default Main;
