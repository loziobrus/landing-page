import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='Contanct' />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find us</h1>
      <div className="app__wrapper_content">
        <p className='p__ p__opensans'>Some address is on lol kek, 29, Ukraine</p>
        <p className='p__ p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening hours</p>
        <p className='p__ p__opensans'>Mon - Fri: 10:00 - 18:00</p>
        <p className='p__ p__opensans'>Sat - Sun: 10:00 - 03:00</p>
      </div>
      <button className='custom__button' style={{ marginTop: '2rem' }}>Visit us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
