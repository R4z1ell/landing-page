import React from 'react';

import {
  Wrapper,
  UpperText,
  Title,
  Description,
  Divider,
  SocialSection,
  Flex,
  Name,
  IconsWrapper
} from './style';

const TextElement = () => {
  return (
    <Wrapper>
      <UpperText>Nun ce sta' mammà là dint'!</UpperText>
      <Title>
        Quann steva là in Honduras, steva rint a na capanna e nziemm a me ce
        steva.
      </Title>
      <Description>
        E intant' e sord tuoj nunn arrivavan. 'Na sera gli honduregni me
        mettetter' nu macete n'man e gridavan': 'Accirel'! Accirel'! Je pregav',
        pregav' ca corcrun' me venev' a salva', ca tu me veniv' a salva'!
      </Description>
      <Divider />
      <SocialSection>
        <Flex>
          <img src="images/Oval.png" alt="oval" />
          <Name>Lorem Ipsum</Name>
        </Flex>
        <IconsWrapper>
          <img src="images/flame.png" alt="flame" />
          <img src="images/paper.png" alt="paper" />
          <img src="images/drop.png" alt="drop" />
        </IconsWrapper>
      </SocialSection>
    </Wrapper>
  );
};

export default TextElement;
