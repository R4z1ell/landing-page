import React from 'react';
import Card from '../Card';
import { cardsData } from '../../utils/data';

import { CardsWrapper, Container } from './style';

const CardsContainer = () => {
  return (
    <Container>
      <CardsWrapper>
        {cardsData.map((card, i) => (
          <Card key={card.number} {...cardsData[i]} />
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default CardsContainer;
