import React from 'react';
import ImageSlider from '../src/component/ImageSlider';
import Parallax from './component/Parallax';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <Parallax />
      <ImageSlider />
      
    </div>
   
  );
};

export default App;