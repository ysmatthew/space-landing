import React from 'react';
import Logo from '../images/svg/ss-logo.svg';
import style from '../scss/modules/header.module.scss';
import { Link  } from "react-scroll";

function Header() {
  return (
    <header>
      <div className={style.container}>
           <a href="https://ysmatthew.com" target="_blank" rel="noopener noreferrer" >
              <img src={Logo} alt="The space logo" />  
           </a>
        
           <Link className={style.btn} to="contact-form" activeClass="active" spy={true} smooth={true} offset={-70} duration={500} >
              Contact
          </Link>
      </div>
    </header>
  );
}

export default Header;
