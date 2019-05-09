import React, { Component } from 'react';
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
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.lastScrollPos > window.scrollY) {
      this.setState({
        direction: 'top',
        lastScrollPos: window.scrollY,
        bho: this.state.bho - 0.2
      });
    } else if (this.state.lastScrollPos < window.scrollY) {
      this.setState({
        direction: 'bottom',
        lastScrollPos: window.scrollY,
        bho: this.state.bho + 0.1
      });
    }
  };

  render() {
    return (
      <Wrapper
        position={this.state.lastScrollPos}
        style={{ transform: `translateY(-${this.state.bho}%)` }}
      >
        <Container
          direction={this.state.direction}
          position={this.state.lastScrollPos}
        >
          <TextElement />
          <Gallery />
        </Container>
      </Wrapper>
    );
  }
}

export default ContentSection;
