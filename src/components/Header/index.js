import React from 'react';
import useScrollPosition from '../../shared/hooks/useScrollPosition';

import { Container, HeaderWrapper, Logo, Nav, Link } from './style';

const Header = () => {
  const position = useScrollPosition();

  return (
    <Container>
      <HeaderWrapper value={position}>
        <Logo value={position}>Asdrubale</Logo>
        <Nav value={position}>
          <Link>lorem</Link>
          <Link>ipsum</Link>
          <Link>dolor</Link>
        </Nav>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
