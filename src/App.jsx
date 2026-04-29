import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Ketchup from './components/Ketchup';
import Sales from './components/Sales';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useGSAP(() => {
    // Hero title letter animation
    const heroChars = document.querySelectorAll('.hero-char');
    if (heroChars.length) {
      gsap.to(heroChars, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.9,
        stagger: 0.07,
        ease: 'back.out(1.7)',
        delay: 0.4,
      });
    }

    // Hero subtitle fade
    gsap.fromTo('.hero .subtitle',
      { opacity: 0, y: 20, filter: 'blur(4px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power3.out', delay: 0.1 }
    );
    // Hero desc & cta
    gsap.fromTo(['.hero-desc', '.hero-cta'],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 1 }
    );


    // Hero content parallax
    gsap.to('.hero-content', {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Section titles & underlines
    gsap.utils.toArray('.section-header, .about-text').forEach(header => {
      const title = header.querySelector('.section-title');
      const underline = header.querySelector('.title-underline');
      if (title) {
        gsap.fromTo(title, { opacity: 0, x: -30 }, {
          scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none reverse' },
          opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        });
      }
      if (underline) {
        gsap.fromTo(underline, { width: 0 }, {
          scrollTrigger: { trigger: header, start: 'top 85%', toggleActions: 'play none none reverse' },
          width: 60, duration: 0.8, delay: 0.2, ease: 'power3.out',
        });
      }
    });

    // Image parallax
    gsap.utils.toArray('.image-wrapper img').forEach(img => {
      gsap.fromTo(img,
        { scale: 1.12, y: -15 },
        {
          scale: 1, y: 15,
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    // Staggered cards
    ['.features-grid', '.specs-grid', '.audience-cards'].forEach(sel => {
      const group = document.querySelector(sel);
      if (group) {
        gsap.fromTo(Array.from(group.children),
          { opacity: 0, y: 50, scale: 0.95 },
          {
            scrollTrigger: { trigger: group, start: 'top 85%', toggleActions: 'play none none reverse' },
            opacity: 1, y: 0, scale: 1,
            duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)',
          }
        );
      }
    });

    // General fade elements
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
      if (el.closest('.features-grid') || el.closest('.specs-grid') || el.closest('.audience-cards')) return;
      let xOffset = 0, yOffset = 40;
      if (el.classList.contains('fade-in-left')) { xOffset = -50; yOffset = 0; }
      if (el.classList.contains('fade-in-right')) { xOffset = 50; yOffset = 0; }
      gsap.fromTo(el,
        { opacity: 0, x: xOffset, y: yOffset },
        {
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
          opacity: 1, x: 0, y: 0, duration: 1, ease: 'power3.out',
        }
      );
    });

    // Magnetic button effect
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1, 0.3)' });
      });
    });

  }, { scope: appRef });

  return (
    <LanguageProvider>
      <div ref={appRef}>
        <Navbar />
        <Hero />
        <About />
        <Product />
        <Ketchup />
        <Sales />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
