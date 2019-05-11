import React, { useState } from 'react';
import OverlayContext from './shared/OverlayContext';

import GlobalStyle from './shared/globalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import CardsContainer from './components/CardsContainer';
import Overlay from './components/Overlay';

const App = () => {
  const [overlayStatus, setOverlayStatus] = useState(false);

  const toggleOverlay = () => {
    setOverlayStatus(!overlayStatus);
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Overlay visible={overlayStatus} func={toggleOverlay} />
      <Header />
      <div
        style={{
          paddingTop: '6rem',
          height: window.innerWidth <= 930 ? '100%' : '100vh'
        }}
      >
        <Hero />
        <ContentSection />
        <OverlayContext.Provider
          value={{
            overlayStatus,
            toggleOverlay
          }}
        >
          <CardsContainer />
        </OverlayContext.Provider>
      </div>
    </React.Fragment>
  );
};

export default App;
