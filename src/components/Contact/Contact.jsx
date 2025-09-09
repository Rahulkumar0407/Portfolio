// src/components/Contact/Contact.jsx
import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

// Import the EmailJS library
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef(); // Create a ref for the form
  const [isSending, setIsSending] = useState(false);
  const container = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // This section now contains your personal EmailJS keys
    emailjs
      .sendForm(
        'service_07f11bs',      // Your Service ID
        'template_ylf9nfn',     // Your Template ID
        form.current,           // The form element to send
        'QUqra_1Up75vHXCSp'       // Your Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          e.target.reset(); // Reset the form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };
  
  // GSAP animation logic
  useGSAP(() => {
    gsap.from('.contact-info-left > *', {
      scrollTrigger: {
        trigger: '.contact-info-left',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.contact-form-right > *', {
      scrollTrigger: {
        trigger: '.contact-form-right',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      x: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
    });
  }, { scope: container });

  return (
    <section id="contact" className="section" ref={container}>
      <h2 className="section-title">Get in touch</h2>
      <div className="contact-container">
        <div className="contact-info-left">
          <h2>Let's talk</h2>
          <p>
            I'm currently available to take on new projects, so feel free to send
            me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <FaEnvelope />
              <span>letsmailrahul07@email.com</span>
            </div>
            <div className="contact-detail-item">
              <FaPhone />
              <span>+91-9354961519</span>
            </div>
            <div className="contact-detail-item">
              <FaMapMarkerAlt />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
        <div className="contact-form-right">
          <h3>Send me a message</h3>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Write your message here"
                className="form-input"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-btn" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;