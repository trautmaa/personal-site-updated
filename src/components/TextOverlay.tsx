import React, { FC } from 'react';

const TextOverlay: FC<any> = ({ img, text }) => (
  <div className='image-wrapper'>
    {img}
    <div className='text'>{text}</div>
  </div>
);

export default TextOverlay;
