import React from 'react';
import useResizeWindow from '../../shared/hooks/useResizeWindow';
import ExpandedCard from '../ExpandedCard';

import { OverlayStyle } from './style';

const Overlay = ({ visible, func }) => {
  const resize = useResizeWindow();
  return (
    <OverlayStyle value={visible} onClick={func}>
      <ExpandedCard value={visible} pageWidth={resize} />
    </OverlayStyle>
  );
};

export default Overlay;
