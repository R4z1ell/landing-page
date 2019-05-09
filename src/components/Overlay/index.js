import React from 'react';

import { OverlayStyle } from './style';
import ExpandedCard from '../ExpandedCard';

const Overlay = ({ visible, func }) => {
  return (
    <OverlayStyle value={visible} onClick={func}>
      <ExpandedCard value={visible} />
    </OverlayStyle>
  );
};

export default Overlay;
