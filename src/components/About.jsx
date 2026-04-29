import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
        <div className="container about-container">
            <div className="about-text fade-in-left">
                <div className="section-header">
                    <h2 className="section-title">{t('about_title')}</h2>
                    <div className="title-underline"></div>
                </div>
                <p className="lead-text">{t('about_p1')}</p>
                <p className="highlight-text" style={{fontSize: '1.1rem', marginTop: '1rem'}}>{t('about_p2')}</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px'}} className="fade-in-up">
                    <img src="/images/halal.png" alt="Halal" style={{height: '60px', mixBlendMode: 'multiply'}} />
                    <span style={{fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-green)'}}>{t('halal_cert')}</span>
                </div>
            </div>
            <div className="about-image fade-in-right">
                <div className="image-wrapper">
                    <img src="/images/about_bg_new.jpg" alt="Hamkor Tomato Paste" />
                    <div className="image-accent"></div>
                </div>
            </div>
        </div>
    </section>
  );
}
