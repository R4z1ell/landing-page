import React from 'react';

import GlobalStyle from './shared/globalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import CardsContainer from './components/CardsContainer';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <div style={{ paddingTop: '6rem', height: '100vh' }}>
        <Hero />
        <ContentSection />
        <CardsContainer />
      </div>
    </React.Fragment>
  );
}

export default App;
