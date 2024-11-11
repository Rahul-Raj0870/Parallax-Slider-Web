import React, { useEffect, useState } from 'react';
import './Parallax.css';

import bgImg1 from './images/background-1.png';
import bgImg2 from './images/background-2.png';
import bgImg3 from './images/background-3.png';
import bgImg4 from './images/background-4.png';
import bgImg5 from './images/background-last.png';
import bgImg6 from './images/background-5.png';
const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headingStyle = {
    position: 'fixed',
    top: `${Math.min(scrollY, 200)}px`,
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: Math.max(1 - scrollY / 200, 0),
    transition: 'transform 0.5s ease, opacity 0.8s ease',
  };

  // Single return for rendering
  return (
    <div>
      <div className='sectionedImg'>
        <div className='section'>
          <div className='sec secHead'style={headingStyle}>
            <h1>Life in the Jungle</h1>
          </div>
          <div className='sec sec1' style={{ transform: `translateX(${Math.min(scrollY/5, 15)}px)` }}>
            <img src={bgImg1} alt="" />
          </div>
          <div className='sec sec2' style={{ transform: `translateX(${-Math.min(scrollY/3 , 10)}px)` }}>
            <img src={bgImg2} alt="" />
          </div>
          <div className='sec sec3' style={{ transform: `translateX(${-Math.min(scrollY/5, 15)}px)` }}>
            <img src={bgImg3} alt="" />
          </div>
          <div className='sec sec4' style={{ transform: `translateY(${-Math.min(scrollY/3 , 25)}px)` }}>
            <img src={bgImg4} alt="" />
          </div>
          <div className='sec sec5' style={{ transform: `translateY(${-Math.min(scrollY/10, 20)}px)`}}>
            <img src={bgImg5} alt="" />
          </div>
          <div className='sec sec6'>
            <img src={bgImg6} alt="" />
          </div>
          <div className=' sec sec7'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam dolorum impedit. Sequi quos ex, ducimus consequatur voluptas asperiores quae iure ullam atque labore molestiae eaque accusamus, harum iusto quas?
            Nemo unde ullam excepturi inventore. Neque laboriosam, dicta quo fugiat, culpa necessitatibus aliquid dolorum nemo quae excepturi tempore beatae incidunt quisquam earum sit sint optio accusantium placeat id quia? Cumque.
            Molestias veniam, nulla, eaque dignissimos, exercitationem nobis modi quibusdam tenetur voluptates sunt vel porro eos cupiditate eveniet suscipit unde eius quae. Similique adipisci id dignissimos ab ad. Dolorum, ad sequi?
            Beatae ipsam molestias amet dolorem? Repellat mollitia fugit voluptatibus iste minima saepe nobis, explicabo magnam expedita ut necessitatibus alias ullam quisquam commodi, ab rerum facere sunt non cupiditate dolor! Similique!
            Harum, eum ut quam consequuntur similique suscipit consectetur ab nulla, ex doloribus sapiente! Eligendi numquam veniam nisi alias incidunt eum expedita. Perferendis consequuntur at facere, iste magnam vel ullam dolores?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam dolorum impedit. Sequi quos ex, ducimus consequatur voluptas asperiores quae iure ullam atque labore molestiae eaque accusamus, harum iusto quas?
            Nemo unde ullam excepturi inventore. Neque laboriosam, dicta quo fugiat, culpa necessitatibus aliquid dolorum nemo quae excepturi tempore beatae incidunt quisquam earum sit sint optio accusantium placeat id quia? Cumque.
            Molestias veniam, nulla, eaque dignissimos, exercitationem nobis modi quibusdam tenetur voluptates sunt vel porro eos cupiditate eveniet suscipit unde eius quae. Similique adipisci id dignissimos ab ad. Dolorum, ad sequi?
            Beatae ipsam molestias amet dolorem? Repellat mollitia fugit voluptatibus iste minima saepe nobis, explicabo magnam expedita ut necessitatibus alias ullam quisquam commodi, ab rerum facere sunt non cupiditate dolor! Similique!
            Harum, eum ut quam consequuntur similique suscipit consectetur ab nulla, ex doloribus sapiente! Eligendi numquam veniam nisi alias incidunt eum expedita. Perferendis consequuntur at facere, iste magnam vel ullam dolores?</p>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Parallax;