import React, { useEffect, useRef, useState } from 'react';
import './ImageSlider.css'; 
import Eagle from './images/eagel1.jpg'
import Owl from './images/owl1.jpg'
import Parrot from './images/parrot2.jpg'
import KingFisher from './images/kingfirser2.jpeg'
import Heron from './images/heron.jpeg'
import Elephant from './images/elephant.jpg'
import Leopard from './images/leopard.jpg'
const images = [
  {
    src: Eagle,
    title: 'SLIDER',
    name: 'EAGLE',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
  },
  {
    src: Elephant,
    title: 'SLIDER',
    name: 'Elephant',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
  },
  {
    src: Owl,
    title: 'SLIDER',
    name: 'OWL',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
  },
  
  {
    src: Parrot,
    title: 'SLIDER',
    name: 'Parrot',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
  },
  {
    src: Leopard,
    title: 'SLIDER',
    name: 'Leopard',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
  },
  {
    src: KingFisher,
    title: 'SLIDER',
    name: 'KingFisher',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
  },
  {
    src: Heron,
    title: 'SLIDER',
    name: 'Heron',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.',
  }
  // Add more images as per your requirement
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const runningTime = useRef(null);
  const autoNextTimeout = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const showSlider = (direction) => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
    resetTimeAnimation();
  };

  const resetTimeAnimation = () => {
    if (runningTime.current) {
      runningTime.current.style.animation = 'none';
      runningTime.current.offsetHeight; // trigger reflow
      runningTime.current.style.animation = 'runningTime 7s linear 1 forwards';
    }
  };

  useEffect(() => {
    resetTimeAnimation();
    autoNextTimeout.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => {
      clearTimeout(autoNextTimeout.current);
    };
  }, [currentIndex]);

  return (
    
    <div className="carousel">
      
      <div className="list">
        <div
          className="item"
          style={{ backgroundImage: `url(${images[currentIndex].src})` }}
        >
          
          <div className="content">
            <div className="title">{images[currentIndex].title}</div>
            <div className="name">{images[currentIndex].name}</div>
            <div className="des">{images[currentIndex].description}</div>
            <div className="btn">
              <button>See More</button>
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button className="prev" onClick={() => showSlider('prev')}> &lt; </button>
        <button className="next" onClick={() => showSlider('next')}> &gt; </button>
      </div>

      <div className="timeRunning" ref={runningTime}></div>
    </div>
  );
};

export default ImageSlider;