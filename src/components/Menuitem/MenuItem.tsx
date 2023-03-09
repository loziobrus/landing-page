import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }: MenuItemProps) => (
  <div className='app__menuItem'>
    <div className="app__menuItem_head">
      <div className="app__menuItem_name">
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className='app__menuItem_dash' />
      <div className="app__menuItem_price">
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    <div className="app__menuItem_sub">
      <p className="p__opensans" style={{ color: '#AAA' }}>{tags}</p>
    </div>
  </div>
);

interface MenuItemProps {
  title: string,
  price: string,
  tags: string
}

export default MenuItem;
