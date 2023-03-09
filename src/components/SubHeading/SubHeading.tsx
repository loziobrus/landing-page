import React from 'react';
import { images } from '../../constants'

const SubHeading = ({ title }: SubHeadingProps) => (
  <div style={{ marginBottom: '1rem'}}>
    <p className="p__cormorant">{title}</p>
    {/* <img src={images.spoon} alt="spoon" className='spoon__img' /> */}
  </div>
);

interface SubHeadingProps {
  title: string
}

export default SubHeading;
