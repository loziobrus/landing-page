import React, { useRef } from 'react';
import { images } from '../../constants'
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './Gallery.css';

const photos = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if(current) {
      direction === 'left' && (current.scrollLeft -= 300);
      direction === 'right' && (current.scrollLeft += 300);
    }
  }
  
  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery_content">
        <SubHeading title='Instagram' />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#aaa' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className='custom__button' type='button'>View more</button>
      </div>

      <div className="app__gallery_images">
        <div className="app__gallery_images_container" ref={scrollRef}>
          {photos.map((photo, index) => (
            <div className="app__gallery_images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={photo} alt="" />
              <BsInstagram className='gallery__image_icon'/>
            </div>
          ))}
        </div>
        <div className="app__gallery_images_arrows">
          <BsArrowLeftShort className='gallery__arrow_icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow_icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
