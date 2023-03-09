import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus_overlay flex__center">
      <img src={images.G} alt="g" />
    </div>
    <div className="app__aboutus_content flex__center">
      <div className="app__aboutus_content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">
          Suspendisse vulputate orci pretium, malesuada odio non, ultricies metus. Nunc consequat massa sit amet nisi accumsan, at semper orci pellentesque. Aliquam vel ex eu sapien sollicitudin mollis. Proin in lectus et orci rutrum lacinia vitae sit amet ipsum. Aliquam sagittis ultrices ex, eu efficitur elit sagittis sed.
        </p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className="app__aboutus_content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus_content_history">
        <h1 className="headtext__cormorant">Our history</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">
          Suspendisse vulputate orci pretium, malesuada odio non, ultricies metus. Nunc consequat massa sit amet nisi accumsan, at semper orci pellentesque. Aliquam vel ex eu sapien sollicitudin mollis. Proin in lectus et orci rutrum lacinia vitae sit amet ipsum. Aliquam sagittis ultrices ex, eu efficitur elit sagittis sed.
        </p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
