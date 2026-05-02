import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLanguage } from '../context/LanguageContext';

export default function Product() {
  const { t } = useLanguage();
  const productRef = useRef(null);

  useGSAP(() => {
    // Perfect Burger Assemble Animation based on exact image analysis!
    const animations = [
      { from: -150, to: 40 },   // Top bun
      { from: -50, to: 15 },     // Tomatoes, Ketchup, Cheese, Patty
      { from: 50, to: -15 },    // Onions, Lettuce
      { from: 150, to: -40 }     // Bottom bun
    ];

    gsap.utils.toArray('.burger-layer').forEach((layer, i) => {
      gsap.fromTo(layer, 
        { y: animations[i].from, opacity: 0, scale: 1.1 }, 
        { 
          y: animations[i].to, 
          opacity: 1, 
          scale: 1,
          duration: 1.5, 
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.burger-container',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, { scope: productRef });

  return (
    <div ref={productRef}>
      {/* Mahsulot bo'limi — orqa fonda animatsiyali rasm */}
      <section className="product" id="product">
          <img src="images/product_bg_anim.png" alt="Animated Background" className="product-anim-bg" />
          <div className="product-overlay">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title text-center product-title-white">{t('product_title')}</h2>
                    <div className="title-underline center"></div>
                    <h3 className="text-center product-sub-white" style={{marginBottom: '1.5rem'}}>{t('product_subtitle')}</h3>
                    <ul className="check-list product-list-white" style={{maxWidth: '600px', margin: '0 auto 4rem auto', textAlign: 'left', color: 'white'}}>
                        <li style={{color: 'white'}}><i className="fas fa-circle-check"></i> <span style={{color: 'white'}}>{t('product_desc1')}</span></li>
                        <li style={{color: 'white'}}><i className="fas fa-circle-check"></i> <span style={{color: 'white'}}>{t('product_desc2')}</span></li>
                        <li style={{color: 'white'}}><i className="fas fa-circle-check"></i> <span style={{color: 'white'}}>{t('product_desc3')}</span></li>
                        <li style={{color: 'white'}}><i className="fas fa-circle-check"></i> <span style={{color: 'white'}}>{t('product_desc4')}</span></li>
                    </ul>
                </div>
                <div className="features-grid">
                    <div className="feature-card" style={{borderTop: '4px solid #DC2626'}}>
                        <div className="icon-box" style={{color: '#DC2626'}}><i className="fas fa-droplet"></i></div>
                        <h4>{t('feat_1_title')}</h4>
                        <p>{t('feat_1_desc')}</p>
                    </div>
                    <div className="feature-card" style={{borderTop: '4px solid #2E7D32'}}>
                        <div className="icon-box" style={{color: '#2E7D32'}}><i className="fas fa-leaf"></i></div>
                        <h4>{t('feat_2_title')}</h4>
                        <p>{t('feat_2_desc')}</p>
                    </div>
                    <div className="feature-card" style={{borderTop: '4px solid #DC2626'}}>
                        <div className="icon-box" style={{color: '#DC2626'}}><i className="fas fa-medal"></i></div>
                        <h4>{t('feat_3_title')}</h4>
                        <p>{t('feat_3_desc')}</p>
                    </div>
                    <div className="feature-card" style={{borderTop: '4px solid #2E7D32'}}>
                        <div className="icon-box" style={{color: '#2E7D32'}}><i className="fas fa-tag"></i></div>
                        <h4>{t('feat_4_title')}</h4>
                        <p>{t('feat_4_desc')}</p>
                    </div>
                </div>
            </div>
          </div>
      </section>

      {/* Qadoq & Afzallik — oq fon */}
      <section className="split-section" id="packaging">
          <div className="half-section packaging-bg">
              <div className="max-w fade-in-right">
                  <h2 className="section-title">{t('pack_title')}</h2>
                  <div className="title-underline"></div>
                  <p>{t('pack_desc')}</p>
                  <ul className="check-list" style={{marginTop: '16px'}}>
                      <li><i className="fas fa-check"></i> <span>{t('pack_li1')}</span></li>
                      <li><i className="fas fa-check"></i> <span>{t('pack_li2')}</span></li>
                      <li><i className="fas fa-check"></i> <span>{t('pack_li3')}</span></li>
                      <li><i className="fas fa-check"></i> <span>{t('pack_li4')}</span></li>
                  </ul>
                  {/* Hajmlar */}
                  <div className="volume-box">
                      <div className="volume-label">{t('spec_6_lbl')}</div>
                      <div className="volume-chips">
                          {['450g', '800g', '2100g', '4000g'].map(v => (
                            <span key={v} className="volume-chip">{v}</span>
                          ))}
                      </div>
                  </div>
                  {/* Hajim rasmi o'rniga yangi yuborilgan rasm */}
                  <div className="volumes-img-wrap">
                      <img src="images/new_packaging.jpg" alt="Hamkor qadoq" className="volumes-img" />
                  </div>
              </div>
          </div>
          <div className="half-section advantages-bg">
              <div className="max-w fade-in-left">
                  <h2 className="section-title">{t('adv_title')}</h2>
                  <div className="title-underline adv-underline"></div>
                  <p className="lead-text">{t('adv_p1')}</p>
                  {/* Ikonkali afzalliklar — raqam o'rniga belgi */}
                  <ul className="advantage-list">
                      <li>
                          <div className="adv-stat"><i className="fas fa-star"></i></div>
                          <span>{t('adv_li1')}</span>
                      </li>
                      <li>
                          <div className="adv-stat"><i className="fas fa-chart-line"></i></div>
                          <span>{t('adv_li2')}</span>
                      </li>
                      <li>
                          <div className="adv-stat"><i className="fas fa-tag"></i></div>
                          <span>{t('adv_li3')}</span>
                      </li>
                      <li>
                          <div className="adv-stat"><i className="fas fa-shield-halved"></i></div>
                          <span>{t('adv_li4')}</span>
                      </li>
                  </ul>
              </div>

              {/* Afzalliklardan pastdagi burger */}
              <div className="burger-container">
                  {[...Array(4)].map((_, i) => (
                      <div key={i} className={`burger-layer burger-layer-${i + 1}`}></div>
                  ))}
              </div>
          </div>
      </section>

      {/* Xususiyatlar — oq fon */}
      <section className="specs" id="specs">
          <div className="container">
              <div className="section-header fade-in-up">
                  <h2 className="section-title text-center">{t('specs_title')}</h2>
                  <div className="title-underline center"></div>
              </div>
              <div className="specs-grid">
                  <div className="spec-item">
                      <div className="spec-lbl">{t('spec_1_lbl')}</div>
                      <div className="spec-val">{t('spec_1_val')}</div>
                  </div>
                  <div className="spec-item">
                      <div className="spec-lbl">{t('spec_2_lbl')}</div>
                      <div className="spec-val">{t('spec_2_val')}</div>
                  </div>
                  <div className="spec-item">
                      <div className="spec-lbl">{t('spec_3_lbl')}</div>
                      <div className="spec-val">{t('spec_3_val')}</div>
                  </div>
                  <div className="spec-item">
                      <div className="spec-lbl">{t('spec_4_lbl')}</div>
                      <div className="spec-val">{t('spec_4_val')}</div>
                  </div>
                  <div className="spec-item">
                      <div className="spec-lbl">{t('spec_5_lbl')}</div>
                      <div className="spec-val">{t('spec_5_val')}</div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
