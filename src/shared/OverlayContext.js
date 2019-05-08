import React from 'react';

const OverlayContext = React.createContext({
  overlayStatus: false,
  toggleOverlay: () => {}
});

export default OverlayContext;
