import styled from 'styled-components';

const HeroWrapper = styled.div`
  position: relative;
  height: 64rem;
`;

const Image = styled.div`
  background-image: url(${props => props.bck});
  background-repeat: no-repeat;
  background-position: center;
  background-color: #1c1c1c;
  width: 100%;
  height: 100%;
`;

export { HeroWrapper, Image };
