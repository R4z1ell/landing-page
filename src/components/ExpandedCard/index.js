import React from 'react';
import { easePolyOut, easeQuadOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import { CardStyle, Text, WhiteSection, ImagesWrapper } from './style';

const ExpandedCard = ({ value }) => {
  const showCard = () => (
    <Animate
      show={value}
      start={{
        width: 31,
        height: 41.4
      }}
      enter={{
        width: [95.7],
        height: [65.8],
        timing: { duration: 500, ease: easePolyOut }
      }}
    >
      {({ width, height }) => {
        return (
          <CardStyle
            style={{
              width: `${width}rem`,
              height: `${height}rem`
            }}
          >
            {showText()}
            {showWhiteSection()}
          </CardStyle>
        );
      }}
    </Animate>
  );

  const showText = () => (
    <Animate
      show={value}
      start={{
        opacity: 0,
        marginTop: 35.5
      }}
      enter={{
        opacity: [1],
        marginTop: [12.5],
        timing: { delay: 500, duration: 500, ease: easeQuadOut }
      }}
    >
      {({ opacity, marginTop }) => {
        return (
          <Text
            style={{
              opacity,
              marginTop: `${marginTop}rem`
            }}
          >
            Quann' tu me purtast' a spara' chillu cristian' p'a prima vota.
          </Text>
        );
      }}
    </Animate>
  );

  const showWhiteSection = () => (
    <Animate
      show={value}
      start={{
        height: 0
      }}
      enter={{
        height: [32.8],
        timing: { delay: 250, duration: 700, ease: easePolyOut }
      }}
    >
      {({ height }) => {
        return (
          <WhiteSection
            style={{
              height: `${height}rem`
            }}
          >
            {showImages()}
          </WhiteSection>
        );
      }}
    </Animate>
  );

  const showImages = () => (
    <Animate
      show={value}
      start={{
        opacity: 0
      }}
      enter={{
        opacity: [1],
        timing: { delay: 500, duration: 500, ease: easePolyOut }
      }}
    >
      {({ opacity }) => {
        return (
          <ImagesWrapper
            style={{
              opacity
            }}
          >
            <img src="images/gallery-4.png" alt="couple" />
            <img src="images/gallery-4.png" alt="couple" />
            <img src="images/gallery-4.png" alt="couple" />
            <img src="images/gallery-4.png" alt="couple" />
            <img src="images/gallery-4.png" alt="couple" />
          </ImagesWrapper>
        );
      }}
    </Animate>
  );

  return <React.Fragment>{showCard()}</React.Fragment>;
};

export default ExpandedCard;
