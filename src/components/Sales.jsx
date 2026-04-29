import { useLanguage } from '../context/LanguageContext';

export default function Sales() {
  const { t } = useLanguage();

  return (
    <section className="sales-audience" id="sales">
        <div className="container">
            <div className="grid-2">
                <div className="sales-info fade-in-up">
                    <div className="section-header">
                        <h2 className="section-title">{t('sales_title')}</h2>
                        <div className="title-underline"></div>
                    </div>
                    <ul className="check-list mt-4">
                        <li><i className="fas fa-shop"></i> <span>{t('sales_li1')}</span></li>
                        <li><i className="fas fa-truck-fast"></i> <span>{t('sales_li2')}</span></li>
                        <li><i className="fas fa-mobile-screen"></i> <span>{t('sales_li3')}</span></li>
                    </ul>
                    <div className="delivery-box">
                        <div className="d-flex">
                            <div className="delivery-icon">
                                <i className="fas fa-truck"></i>
                            </div>
                            <div>
                                <h4>Yetkazib berish xizmati</h4>
                                <p>Barcha viloyatlarga xavfsiz va tezkor yetkazib berish yo'lga qo'yilgan.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="audience-info fade-in-up">
                    <div className="section-header">
                        <h2 className="section-title">{t('who_title')}</h2>
                        <div className="title-underline"></div>
                    </div>
                    <div className="audience-cards">
                        <div className="aud-card">
                            <i className="fas fa-store"></i>
                            <span>{t('who_1')}</span>
                        </div>
                        <div className="aud-card">
                            <i className="fas fa-utensils"></i>
                            <span>{t('who_2')}</span>
                        </div>
                        <div className="aud-card">
                            <i className="fas fa-cart-shopping"></i>
                            <span>{t('who_3')}</span>
                        </div>
                        {/* Export - samolyot belgisi */}
                        <div className="aud-card">
                            <i className="fas fa-plane"></i>
                            <span>{t('who_4')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
