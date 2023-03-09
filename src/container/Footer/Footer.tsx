import React from 'react';
import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer_links">
      <div className="app__footer_links_contact">
        <h1 className="app__footer_headtext">Contact us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 120 00</p>
        <p className='p__opensans'>+1 434 566 234</p>
        <p className='p__opensans'>+1 434 566 756</p>
      </div>
      <div className="app__footer_links_logo">
        <img src={images.gericht} alt="" />
        <p className='p__opensans'>"The best way is omeht aiuy dhf of other lorems inosut dolor."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: 15 }} />
        <div className="app__footer_links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer_links_work">
        <h1 className="app__footer_headtext">Working hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>10:00-03:00</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>10:00-04:00</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className='p__opensans'>2021 Gericht. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
