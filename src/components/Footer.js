import React from 'react';
import logo from '../images/ss-logo.png';
import style from '../scss/modules/footer.module.scss';
import { Link  } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className={style.container}>
          <div className={style.info}>
            <div className={style.content}>
              <h3>Vulputate odio ut enim blandit volutpat</h3>
              <p>Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum. Urna cursus eget nunc scelerisque viverra mauris in. Rhoncus est pellentesque elit ullamcorper. Urna condimentum mattis pellentesque id. Pretium vulputate sapien nec sagittis aliquam. Accumsan lacus vel facilisis volutpat est velit egestas dui. </p>
            </div>

            <div className={style.btnWrap}>
              <Link className={style.btn} to="contact-form" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Learn More</Link>
            </div>
          </div>

          <div className={style.footerLogo}>
            <img src={logo} alt="The logo" /> 
          </div>
      </div>
    </footer>
  );
}

export default Footer;
