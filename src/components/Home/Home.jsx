// src/components/Home/Home.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import './Home.css';

import myPhoto from '../../assets/Dp.jpeg';

gsap.registerPlugin(TextPlugin);

const Home = () => {
  const container = useRef();
  const animatedHeadlineRef = useRef();

  useGSAP(() => {
    gsap.to(animatedHeadlineRef.current, {
      duration: 2,
      text: "I'm Rahul Kumar",
      ease: "power1.inOut",
      delay: 0.5
    });

    gsap.to(".reveal-on-load", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      delay: 1
    });

  }, { scope: container });

  return (
    <section id="home" className="section" ref={container}>
      <div className="home-container">
        <div className="home-photo-container reveal-on-load">
          <img src={myPhoto} alt="Rahul Kumar" className="home-photo" />
        </div>
        
        <div className="headline-wrapper">
          <h1 className="home-headline-animated" ref={animatedHeadlineRef}></h1>
          <p className="home-headline-static reveal-on-load">Frontend developer based in Delhi.</p>
        </div>

        <p className="home-description-main reveal-on-load">
          I'm a 2nd-year B.Tech student at Maharaja Agrasen Institute of Technology, Delhi, passionate about web development, AI, and building impactful projects.
        </p>

        <div className="home-buttons reveal-on-load">
          <a href="#contact" className="home-button primary">Connect with me</a>
          <a href="https://drive.google.com/file/d/1L0ZqPZ25SES3FkLY8XKXwzSNC4EhvB2z/view?usp=sharing" className="home-button secondary" target="_blank" rel="noopener noreferrer">My resume</a>
        </div>
      </div>
    </section>
  );
};

export default Home;