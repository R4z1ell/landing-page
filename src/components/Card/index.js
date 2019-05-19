import React, { useContext } from 'react';
import OverlayContext from '../../shared/context/OverlayContext';

import { CardWrapper, Number, Text, Title, Button } from './style';

const Card = ({ number, icon, text, title, button }) => {
  const overlay = useContext(OverlayContext);

  const handleOverlay = () => {
    overlay.toggleOverlay();
  };

  return (
    <CardWrapper>
      <Number>{number}</Number>
      {icon && <img src="images/pig.png" alt="small-pig" />}
      {text && <Text>{text}</Text>}
      <Title value={text}>{title}</Title>
      {button && <Button onClick={handleOverlay}>clicca qui</Button>}
    </CardWrapper>
  );
};

export default Card;
