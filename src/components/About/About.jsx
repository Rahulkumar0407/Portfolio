// src/components/About/About.jsx
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

import myPhoto from '../../assets/Dp.jpeg';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'React JS', percentage: 70 },
];

const About = () => {
  const container = useRef();
  const skillBarsRef = useRef([]);
  const statsRef = useRef([]);

  useGSAP(() => {
    // GSAP animations remain the same
    gsap.from('.about-content-text > *', {
      scrollTrigger: {
        trigger: '.about-content-text',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    skillBarsRef.current.forEach((bar, index) => {
      gsap.fromTo(bar.querySelector('.progress-fill'),
        { width: '0%' },
        {
          width: `${skillsData[index].percentage}%`,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        }
      );
    });

    gsap.from(statsRef.current, {
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out',
    });

  }, { scope: container });

  return (
    <section id="about" className="section" ref={container}>
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-image-wrapper">
          <div className="about-photo-card">
            {/* STEP 2: Use the imported 'myPhoto' variable here. */}
            <img src={myPhoto} alt="Rahul Kumar" className="about-photo" />
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="about-content-text">
          <h3>I am a Frontend Developer with a passion for creating web applications.</h3>
          <p>
            Throughout my academic journey and personal projects, I have developed a good foundation in modern web technologies. My passion for frontend development is reflected in my dedication to crafting responsive, user-friendly, and aesthetically pleasing interfaces. I am constantly exploring new tools and frameworks to enhance my skills and deliver high-quality solutions.
          </p>
          <div className="skills-progress-bars">
            {skillsData.map((skill, index) => (
              <div className="skill-bar-item" key={index} ref={el => skillBarsRef.current[index] = el}>
                <h4>
                  {skill.name}
                  <span>{skill.percentage}%</span>
                </h4>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-stats">
        <div className="stat-item" ref={el => statsRef.current[0] = el}>
          <h3>0+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat-item" ref={el => statsRef.current[1] = el}>
          <h3>4+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item" ref={el => statsRef.current[2] = el}>
          <h3>0+</h3>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default About;