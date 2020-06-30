import React, { useState, useRef, useEffect } from 'react';
import style from '../scss/modules/fadeup.module.scss'


function FadeUp(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
        
      });
      observer.observe(domRef.current); 
     
    }, []);
    
    return (
      <div
        className={`${style.fadeInSection} ${isVisible ? `${style.fade}` : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  
export default FadeUp;