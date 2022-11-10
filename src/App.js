import React from 'react';
import { Featured, Footer, Hero, Highlight, PopularSales, TopRatedSales, TopStories } from './components/hero/index';
import { heroapi, popularsales,highlight, toprateslaes, sneaker, story, footerAPI } from './data/data';


function App() {
  return (
    <>
    <main>
      <Hero heroapi={heroapi}/>
      <PopularSales popularsales={popularsales}/>
      <Highlight highlight={highlight}/>
      <TopRatedSales toprateslaes={toprateslaes}/>
      <Featured sneaker={sneaker}/>
      <TopStories stories={story}/>
      <Footer footerAPI={footerAPI}/>
    </main>
    </>
  );
}

export default App;
