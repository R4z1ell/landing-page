import styled from 'styled-components';

const Container = styled.header`
  background-color: #fff;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  max-width: 114.6rem;
  margin: 0 auto;
  height: 6rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: #000;
  position: absolute;
`;

const Nav = styled.nav`
  font-family: 'Open Sans';
  font-size: 1.4rem;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  margin-right: 3rem;
  color: #9b9b9b;
  cursor: pointer;
`;

export { Container, HeaderWrapper, Logo, Nav, Link };
