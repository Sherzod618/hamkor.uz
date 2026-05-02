import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          <img src="images/logo.jpg" alt="Hamkor Logo" style={{height: '60px'}} />
        </a>
        <div className="nav-right">
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={()=>setMenuOpen(false)}>{t('nav_about')}</a></li>
            <li><a href="#product" onClick={()=>setMenuOpen(false)}>{t('nav_product')}</a></li>
            <li><a href="#specs" onClick={()=>setMenuOpen(false)}>{t('nav_specs')}</a></li>
            <li><a href="#packaging" onClick={()=>setMenuOpen(false)}>{t('nav_advantages')}</a></li>
            <li><a href="#sales" onClick={()=>setMenuOpen(false)}>{t('nav_sales')}</a></li>
          </ul>
          <div className="nav-actions">
            <div className="lang-switcher">
              <button className={`lang-btn ${lang === 'uz' ? 'active' : ''}`} onClick={() => setLang('uz')}>UZ</button>
              <span>|</span>
              <button className={`lang-btn ${lang === 'ru' ? 'active' : ''}`} onClick={() => setLang('ru')}>RU</button>
              <span>|</span>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
            <a href="#contact-form-sec" className="btn btn-outline nav-contact-btn">{t('nav_contact')}</a>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
