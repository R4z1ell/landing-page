import React, { Component } from 'react';
import throttle from 'lodash.throttle';

import { OverlayStyle } from './style';
import ExpandedCard from '../ExpandedCard';

class Overlay extends Component {
  state = {
    pageInnerWidth: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener('resize', throttle(this.handleResize), 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      pageInnerWidth: window.innerWidth
    });
  };

  render() {
    const { visible, func } = this.props;
    return (
      <OverlayStyle value={visible} onClick={func}>
        <ExpandedCard value={visible} pageWidth={this.state.pageInnerWidth} />
      </OverlayStyle>
    );
  }
}

export default Overlay;
