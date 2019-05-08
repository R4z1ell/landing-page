import React from 'react';

import { Wrapper, Block } from './style';

const Gallery = () => {
  return (
    <Wrapper>
      <img src="images/gallery-1.png" alt="gallery" />
      <Block>
        <img src="images/gallery-2.png" alt="gallery" />
        <img src="images/gallery-3.png" alt="gallery" />
      </Block>
      <img src="images/gallery-4.png" alt="gallery" />
      <Block>
        <img src="images/gallery-5.png" alt="gallery" />
        <img src="images/gallery-6.png" alt="gallery" />
      </Block>
    </Wrapper>
  );
};

export default Gallery;
