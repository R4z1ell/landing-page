import React from 'react';

import { CardWrapper, Number, Text, Title, Button } from './style';

const Card = ({ number, icon, text, title, button }) => {
  return (
    <CardWrapper>
      <Number>{number}</Number>
      {icon && <img src="images/pig.png" alt="small-pig" />}
      {text && <Text>{text}</Text>}
      <Title value={text}>{title}</Title>
      {button && <Button>clicca qui</Button>}
    </CardWrapper>
  );
};

export default Card;
