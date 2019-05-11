import styled from 'styled-components';
import { below } from '../../shared/MediaQueries';

const Container = styled.header`
  background-color: #fff;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  max-width: 114.6rem;
  margin: 0 auto;
  height: ${props => (props.value > 335 ? '0' : '6rem')};
  display: flex;
  align-items: center;
  transition: all 0.3s;

  @media ${below.desktopB} {
    margin: 0 3%;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: #000;
  position: absolute;
  opacity: ${props => (props.value > 335 ? '0' : '1')};
  transition: all 0.3s;
  cursor: default;
`;

const Nav = styled.nav`
  font-family: 'Open Sans';
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  opacity: ${props => (props.value > 335 ? '0' : '1')};
  transition: all 0.3s;
`;

const Link = styled.a`
  text-decoration: none;
  margin-right: 3rem;
  color: #9b9b9b;
  cursor: default;

  &:nth-child(1) {
    margin-left: 3.5rem;
  }
`;

export { Container, HeaderWrapper, Logo, Nav, Link };
