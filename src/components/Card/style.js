import styled from 'styled-components';
import { below } from '../../shared/MediaQueries';

const CardWrapper = styled.div`
  position: relative;
  width: 31rem;
  height: 41.4rem;
  background-color: #f8e627;
  border-radius: 1.2rem;
  margin-bottom: 3rem;
  padding: 6rem 2.8rem;
  font-family: 'Montserrat';
  overflow: hidden;

  @media ${below.desktopS} {
    margin-bottom: 3rem;
    width: 56.8rem;
    height: 32.4rem;

    &:nth-child(3) {
      margin-bottom: 0;
    }
  }
`;

const Number = styled.div`
  position: absolute;
  top: -25.5%;
  left: -10%;
  font-size: 21.6rem;
  font-weight: 700;
  color: #ecda1f;

  @media ${below.desktopS} {
    top: -34.5%;
  }
`;

const Text = styled.p`
  position: relative;
  font-size: 1.4rem;
  margin-top: 2.2rem;
  margin-bottom: 1.8rem;
  line-height: 1;
  color: #000;
`;

const Title = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 3.2rem;
  color: #000;
  margin-top: ${props => (props.value ? '' : '9.5rem')};

  @media ${below.desktopS} {
    font-size: 2.3rem;
  }
`;

const Button = styled.button`
  border: 1px solid #3a405b;
  border-radius: 0.8rem;
  width: 25.4rem;
  height: 5.1rem;
  margin-top: 2.5rem;
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Montserrat';
  letter-spacing: 2.5px;
  cursor: pointer;
  outline: 0;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ecda1f;
  }
`;

export { CardWrapper, Number, Text, Title, Button };
