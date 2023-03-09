import React from 'react';
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';
import { Award } from '../../constants/data';

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards and recognition" />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map(award => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

const AwardCard = ({award: { imgUrl, title, subtitle}}: {award: Award}) => (
  <div className="app__laurels_awards_card">
    <img src={imgUrl} alt="" />
    <div className="app__laurels_awards_card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87'}}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
)

export default Laurels;
