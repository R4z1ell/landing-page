import React, { useState, useEffect } from 'react';

import { Container, HeaderWrapper, Logo, Nav, Link } from './style';

const Header = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setPrevScrollpos(currentScrollPos);
  };

  return (
    <Container>
      <HeaderWrapper value={prevScrollpos}>
        <Logo value={prevScrollpos}>Asdrubale</Logo>
        <Nav value={prevScrollpos}>
          <Link>lorem</Link>
          <Link>ipsum</Link>
          <Link>dolor</Link>
        </Nav>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;