import styled from 'styled-components';
import { below } from '../../shared/MediaQueries';

const Wrapper = styled.div`
  width: 56.7rem;

  @media ${below.desktopL} {
    width: 51.5rem;
  }

  @media ${below.desktopM} {
    width: 43.5rem;
  }

  @media ${below.desktopS} {
    width: 56.7rem;
  }

  @media ${below.tabletM} {
    width: 100%;
  }
`;

const UpperText = styled.p`
  font-family: 'Montserrat';
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
  color: #000;
`;

const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 4.4rem;
  margin-bottom: 2.5rem;
  color: #000;

  @media ${below.desktopL} {
    font-size: 3.4rem;
  }

  @media ${below.desktopM} {
    font-size: 2.9rem;
  }
`;

const Description = styled.p`
  font-family: 'Open Sans';
  font-size: 1.6rem;
  letter-spacing: 0.512px;
  color: #4a4a4a;
`;

const Divider = styled.div`
  height: 1px;
  background: #dde4e4;
  margin: 2.5rem 0;
`;

const SocialSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }
`;

const Name = styled.div`
  font-family: 'Open Sans';
  font-size: 1.2rem;
  color: #9b9b9b;
`;

const IconsWrapper = styled.div`
  img:nth-child(1) {
    margin-right: 2rem;
  }

  img:nth-child(2) {
    margin-right: 2rem;
  }
`;

export {
  Wrapper,
  UpperText,
  Title,
  Description,
  Divider,
  SocialSection,
  Flex,
  Name,
  IconsWrapper
};
