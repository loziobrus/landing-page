import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding app__bg' id='home'>
    <div className="app__wrapper_info">
      {/* <SubHeading title={'Chase the new flavour'} /> */}
      <h1 className='app__header_h1'>Feel the past on your finger tips</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non mollis est. Sed imperdiet, elit in pharetra porttitor, eros massa euismod velit, vel pulvinar diam lorem non tortor.
      </p>
      <button type='button' className='custom__button'>Explore the catalog</button>
    </div>
    {/* <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div> */}
  </div>
);

export default Header;
