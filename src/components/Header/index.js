import React from 'react';

import { Container, HeaderWrapper, Logo, Nav, Link } from './style';

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo>Asdrubale</Logo>
        <Nav>
          <Link>lorem</Link>
          <Link>ipsum</Link>
          <Link>dolor</Link>
        </Nav>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
