import styled from 'styled-components';
import { below } from '../../shared/MediaQueries';

const Wrapper = styled.div`
  display: flex;
  margin-top: 7.1rem;

  @media ${below.desktopL} {
    transform: scale(0.9) translateX(-5rem);
  }

  @media ${below.desktopM} {
    transform: scale(0.77) translateX(-12rem);
  }

  @media ${below.desktopS} {
    transform: scale(1) translateX(0);
    margin-left: 1.8rem;
  }

  @media ${below.tabletM} {
    flex-wrap: wrap;
    margin-top: 9.1rem;
    margin-left: 0;
    width: 27.6rem;

    img:nth-child(1) {
      margin-bottom: 1.9rem;
    }
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1.8rem;

  img:nth-child(1) {
    margin-bottom: 1.9rem;
  }

  @media ${below.tabletM} {
    margin-right: 0;
  }
`;

export { Wrapper, Block };
