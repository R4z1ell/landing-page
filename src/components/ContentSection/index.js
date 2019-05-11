import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import TextElement from '../TextElement';
import Gallery from '../Gallery';

import { Container, Wrapper } from './style';

class ContentSection extends Component {
  state = {
    direction: '',
    lastScrollPos: 0,
    bho: 26.8
  };

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll), 200);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.lastScrollPos > window.pageYOffset) {
      this.setState(prevState => ({
        direction: 'top',
        lastScrollPos: window.pageYOffset,
        bho: prevState.bho - 0.2
      }));
    } else if (this.state.lastScrollPos < window.pageYOffset) {
      this.setState(prevState => ({
        direction: 'bottom',
        lastScrollPos: window.pageYOffset,
        bho: prevState.bho + 0.1
      }));
    }
  };

  render() {
    return (
      <Wrapper
        position={this.state.lastScrollPos}
        style={{
          transform:
            window.innerWidth > 930
              ? `translateY(-${this.state.bho}%)`
              : 'translateY(-26.8%)'
        }}
      >
        <Container>
          <TextElement />
          <Gallery />
        </Container>
      </Wrapper>
    );
  }
}

export default ContentSection;
