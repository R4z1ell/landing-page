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

const TextElement = ({ upText, title, description, name }) => {
  return (
    <Wrapper>
      <UpperText>{upText}</UpperText>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Divider />
      <SocialSection>
        <Flex>
          <img src="images/Oval.png" alt="oval" />
          <Name>{name}</Name>
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
