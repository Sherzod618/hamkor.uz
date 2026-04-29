import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" id="contact">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-brand fade-in-up">
                    <h2>HAMKOR</h2>
                    <p>{t('foot_desc')}</p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-telegram"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
                <div className="footer-contact fade-in-up">
                    <h3>{t('foot_manufacturer')}</h3>
                    <ul className="contact-list">
                        <li><i className="fas fa-industry"></i> <span>{t('foot_mfg_name')}</span></li>
                        <li><i className="fas fa-location-dot"></i> <span>{t('foot_mfg_address')}</span></li>
                        <li><i className="fas fa-phone"></i> <span>+998 95 422 07 70</span></li>
                        <li><i className="fas fa-phone"></i> <span>+998 91 212 08 94</span></li>
                        <li><i className="fas fa-envelope"></i> <span>Info@timurhamkor.uz</span></li>
                        <li style={{alignItems: 'center'}}>
                            <img src="/images/gost.jpg" alt="GOST" style={{height: '30px', marginRight: '10px', background: 'white', borderRadius: '4px', padding: '2px'}} />
                            <span>{t('foot_mfg_gost')}</span>
                        </li>
                    </ul>
                </div>
                <div className="footer-links fade-in-up">
                    <h3>{t('foot_links')}</h3>
                    <ul>
                        <li><a href="#about">{t('nav_about')}</a></li>
                        <li><a href="#product">{t('nav_product')}</a></li>
                        <li><a href="#sales">{t('nav_sales')}</a></li>
                        <li><a href="#contact-form-sec">{t('nav_contact')}</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} HAMKOR. {t('foot_copy')}</p>
            </div>
        </div>
    </footer>
  );
}
