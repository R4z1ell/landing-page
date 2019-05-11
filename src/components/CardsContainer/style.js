import styled from 'styled-components';
import { below } from '../../shared/MediaQueries';

const Container = styled.div`
  max-width: 115.2rem;
  height: 130.2rem;
  margin: 0 auto;
  transform: translateY(-66.7%);

  @media ${below.desktopL} {
    width: 100%;
    margin: 0;
  }

  @media ${below.desktopS} {
    transform: translateY(-7%);
    height: fit-content;
  }
`;

const CardsWrapper = styled.div`
  position: absolute;
  top: -7rem;
  right: 9.7rem;

  @media ${below.desktopB} {
    right: 7.7rem;
  }

  @media ${below.desktopL} {
    right: 5.7rem;
    top: -10rem;
  }

  @media ${below.desktopS} {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { Container, CardsWrapper };
