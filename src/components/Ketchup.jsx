import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Ketchup() {
  const ketchupRef = useRef(null);

  useGSAP(() => {
    // Ketchup Jar animation
    gsap.fromTo('.ketchup-jar', 
       { y: 150, opacity: 0, scale: 0.8, rotation: 5 },
       { 
         y: 0, opacity: 1, scale: 1, rotation: 0, 
         duration: 1.5, 
         ease: 'back.out(1.5)', 
         scrollTrigger: {
           trigger: '.ketchup-jar',
           start: 'top 85%',
         }
       }
    );

    // Ketchup decor floating
    gsap.utils.toArray('.ketchup-decor').forEach((decor, i) => {
      gsap.to(decor, {
        y: 'random(-20, 20)',
        rotation: 'random(-10, 10)',
        duration: 'random(3, 5)',
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
      gsap.to(decor, {
        yPercent: Number(decor.getAttribute('data-speed')) * 100 || 0,
        scrollTrigger: {
          trigger: ketchupRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        }
      });
    });
  }, { scope: ketchupRef });

  return (
    <section className="ketchup-section split-section" id="ketchup" ref={ketchupRef}>
      <div className="ketchup-decor-left">
         <img src="/images/ketchup_decor.png" alt="decor" className="ketchup-decor decor-k-1" data-speed="-0.3" />
      </div>
      <div className="ketchup-decor-right">
         <img src="/images/ketchup_decor.png" alt="decor" className="ketchup-decor decor-k-2" data-speed="0.4" />
      </div>

      <div className="half-section" style={{background: 'transparent', zIndex: 2}}>
          <div className="max-w fade-in-left">
              <div className="tagline ketchup-tagline">Hali bunday ta’mni his qilmagansiz</div>
              <h2 className="section-title">Hamkor Ketchup</h2>
              <div className="title-underline"></div>
              
              <p className="lead-text ketchup-desc" style={{marginBottom: '1rem'}}>
                <strong>Hamkor Ketchup</strong> — bu oddiy ketchup emas. U maxsus tanlangan mavsumiy pomidorlardan tayyorlanib, o‘ziga xos boy va tabiiy ta’mni taqdim etadi.
              </p>
              <p className="ketchup-desc">
                Har bir tomchida mukammal muvozanat, mayin konsistensiya va yuqori sifat mujassam. Agar siz ketchupni chin dildan yaxshi ko‘rsangiz — bu aynan siz uchun.
              </p>

              <ul className="advantage-list ketchup-features" style={{marginTop: '2rem'}}>
                  <li>
                      <div className="ketchup-icon"><i className="fas fa-fire"></i></div>
                      <span className="ketchup-feat-text">Har tomchida haqiqiy lazzat</span>
                  </li>
                  <li>
                      <div className="ketchup-icon"><i className="fas fa-heart"></i></div>
                      <span className="ketchup-feat-text">Ketchup sevuvchilar uchun yaratilgan</span>
                  </li>
                  <li>
                      <div className="ketchup-icon"><i className="fas fa-star"></i></div>
                      <span className="ketchup-feat-text">Oddiy emas — o‘ziga xos ta’m</span>
                  </li>
              </ul>
          </div>
      </div>
      
      <div className="half-section" style={{background: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2}}>
          <div className="ketchup-image-container fade-in-right">
              <img src="/images/ketchup_jar.png" alt="Hamkor Ketchup" className="ketchup-jar" />
          </div>
      </div>
    </section>
  );
}
