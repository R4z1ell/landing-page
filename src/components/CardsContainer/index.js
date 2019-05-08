import React from 'react';
import Card from '../Card';
import { cardData } from '../../utils/data';

import { CardsWrapper, Container } from './style';

const CardsContainer = () => {
  return (
    <Container>
      <CardsWrapper>
        {cardData.map((card, i) => (
          <Card key={card.number} {...cardData[i]} />
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default CardsContainer;
