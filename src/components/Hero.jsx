import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  useGSAP(() => {
    // Logo entrance animation
    gsap.fromTo('.hero-final-logo', 
      { scale: 0.5, opacity: 0, rotation: -5 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: 'back.out(1.5)', delay: 0.2 }
    );

    // Floating decors simple continuous floating
    gsap.utils.toArray('.floating-decor').forEach((decor, i) => {
      // Entrance
      gsap.fromTo(decor, 
        { y: -100, opacity: 0, rotation: -30 },
        { y: 0, opacity: decor.classList.contains('decor-1') ? 0.9 : 0.85, rotation: 0, duration: 1.5, ease: 'power2.out', delay: i * 0.2 }
      );
      
      // Floating animation
      gsap.to(decor, {
        y: '+=30',
        x: i % 2 === 0 ? '+=15' : '-=15',
        rotation: i % 2 === 0 ? 10 : -10,
        duration: 3 + i,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: 1.5
      });
      
      // Scroll parallax
      gsap.to(decor, {
        yPercent: Number(decor.getAttribute('data-speed')) * 100 || 50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  }, { scope: heroRef });

  return (
    <section className="hero" ref={heroRef}>
        <div className="hero-overlay"></div>
        
        {/* Dekoratsiyalar - Faqat chekkalarda */}
        <div className="decor-left">
           <img src="images/floating_decor.png" alt="decor" className="floating-decor decor-1" data-speed="-0.4" />
        </div>
        <div className="decor-right">
           <img src="images/floating_decor.png" alt="decor" className="floating-decor decor-2" data-speed="0.5" />
        </div>
        
        <div className="container hero-content">
            <p className="subtitle">{t('hero_subtitle')}</p>
            
            {/* Yangi tasdiqlangan rasmli logotip */}
            <div className="hero-logo-wrap">
              <img src="images/logo_final.png" alt="Hamkor Logo" className="hero-final-logo" />
            </div>
            
            <p className="hero-desc">
                <span className="hero-feat">{t('hero_feat1')}</span>
                <span className="dot"></span>
                <span className="hero-feat">{t('hero_feat2')}</span>
                <span className="dot"></span>
                <span className="hero-feat">{t('hero_feat3')}</span>
            </p>
            <p className="hero-tagline">{t('hero_desc')}</p>
            
            <div className="hero-cta">
                <a href="#product" className="btn btn-primary">{t('hero_btn_explore')}</a>
                <a href="#contact-form-sec" className="btn btn-contact-custom">{t('hero_btn_contact')}</a>
            </div>
        </div>
    </section>
  );
}
