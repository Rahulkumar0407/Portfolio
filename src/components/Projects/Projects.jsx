// src/components/Projects/Projects.jsx
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

import ChatAppThumb from '../../assets/Chatapp.png';
import LamboThumb from '../../assets/Lambo.png';
import RaybanThumb from '../../assets/Rayban.png';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'Chat App',
    description:
      "Build a Real-Time Chat App in React with ZEGOCLOUD. This project enables private messaging and a clean, responsive UI powered by ZEGOCLOUD’s reliable real-time communication SDK.",
    thumbnail: ChatAppThumb,
    demo: 'https://gup-shup-frontend-dib4.onrender.com',
  },
  {
    title: 'Lamborghini Landing Page',
    description:
      'A modern, animated landing page inspired by the boldness of Lamborghini. Built with HTML, CSS, and JavaScript, and powered by GSAP + Shery.js for smooth, advanced animations.',
    thumbnail: LamboThumb,
    demo: 'https://lamboverse.netlify.app/',
  },
  {
    title: 'Ray-Ban Landing Page',
    description:
      'A stylish, interactive landing page concept inspired by the iconic Ray-Ban brand. Developed with HTML, CSS, and JavaScript, enhanced by GSAP and Shery.js',
    thumbnail: RaybanThumb,
    demo: 'https://rahulgiveszero.netlify.app/',
  },
];

const Projects = () => {
  useGSAP(() => {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  });

  return (
    <section id="projects" className="section">
      <h2 className="section-title">My latest work</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-thumbnail"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
