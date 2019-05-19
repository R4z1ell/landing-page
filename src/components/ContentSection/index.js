import React from 'react';
import { textElementData } from '../../utils/data';
import useScrollPosition from '../../shared/hooks/useScrollPosition';
import useResizeWindow from '../../shared/hooks/useResizeWindow';
import TextElement from '../TextElement';
import Gallery from '../Gallery';

import { Container, Wrapper } from './style';

const ContentSection = ({ initialPosition, endPosition, scrollSpeed }) => {
  const position = useScrollPosition();
  const resize = useResizeWindow();

  const calculatePercentage = () => {
    let percentage;
    if (initialPosition && scrollSpeed < position && endPosition > position) {
      percentage = initialPosition + position * scrollSpeed;
    } else {
      percentage = initialPosition + endPosition * scrollSpeed;
    }
    return percentage;
  };

  return (
    <Wrapper
      position={position}
      style={{
        transform:
          resize > 930
            ? `translateY(${calculatePercentage()}%)`
            : resize <= 675
            ? 'translateY(-20.8%)'
            : 'translateY(-26.8%)'
      }}
    >
      <Container>
        <TextElement {...textElementData} />
        <Gallery />
      </Container>
    </Wrapper>
  );
};

export default ContentSection;
