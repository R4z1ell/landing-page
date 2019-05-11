import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import TextElement from '../TextElement';
import Gallery from '../Gallery';

import { Container, Wrapper } from './style';

class ContentSection extends Component {
  state = {
    direction: '',
    lastScrollPos: 0,
    percentageValue: 26.8
  };

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll), 200);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset === 0) {
      this.setState({
        percentageValue: 26.8
      });
    } else if (this.state.lastScrollPos > window.pageYOffset) {
      this.setState(prevState => ({
        direction: 'top',
        lastScrollPos: window.pageYOffset,
        percentageValue:
          prevState.percentageValue < 26.8
            ? 26.8
            : prevState.percentageValue - 0.2
      }));
    } else if (this.state.lastScrollPos < window.pageYOffset) {
      this.setState(prevState => ({
        direction: 'bottom',
        lastScrollPos: window.pageYOffset,
        percentageValue: prevState.percentageValue + 0.1
      }));
    }
  };

  render() {
    let checkPos =
      this.state.lastScrollPos < 5 && this.state.percentageValue > 26.8
        ? 'translateY(-26.8%)'
        : `translateY(-${this.state.percentageValue}%)`;

    return (
      <Wrapper
        position={this.state.lastScrollPos}
        style={{
          transform: window.innerWidth > 930 ? checkPos : 'translateY(-26.8%)'
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
