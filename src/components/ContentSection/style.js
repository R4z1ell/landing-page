import styled from 'styled-components';
import { below } from '../../shared/MediaQueries';

const Container = styled.div`
  width: 115.2rem;
  margin: 0 auto;
  padding: 4.4rem 9.8rem;

  @media ${below.desktopB} {
    padding: 4.4rem 6.8rem;
    width: 109rem;
  }

  @media ${below.desktopL} {
    margin: 0;
    width: 100%;
    padding: 4.4rem 6.8rem;
  }

  @media ${below.desktopS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.4rem 4.4rem 0 4.4rem;
  }
`;

const Wrapper = styled.div`
  width: ${props => (props.position > 385 ? '100%' : '115.2rem')};
  background-color: #fff;
  margin: 0 auto;
  border-radius: ${props => (props.position < 385 ? '1.2rem 1.2rem 0 0' : '0')};
  transition: all 0.3s ease-out;

  @media ${below.desktopB} {
    width: ${props => (props.position > 385 ? '100%' : '109rem')};
  }

  @media ${below.desktopL} {
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export { Container, Wrapper };
