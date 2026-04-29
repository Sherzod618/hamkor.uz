import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const BOT_TOKEN = '8606207765:AAExhG7bIfZ83CVH47_n6v5Jwfsb19tKlWg';
    const CHAT_ID = '5124421897';
    const text = `🍅 Yangi Xabar (Hamkor Web):\n\n👤 Ism: ${formData.name}\n📞 Tel: ${formData.phone}\n💬 Xabar: ${formData.message}`;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        setStatus({ message: "Xabar muvaffaqiyatli yuborildi!", type: "success" });
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus({ message: "Xatolik yuz berdi. Qaytadan urinib ko'ring.", type: "error" });
      }
    })
    .catch(() => {
      setStatus({ message: "Tarmoqqa ulanishni tekshiring.", type: "error" });
    })
    .finally(() => {
      setLoading(false);
      setTimeout(() => setStatus({ message: '', type: '' }), 4000);
    });
  };

  return (
    <section className="contact-form-section" id="contact-form-sec">
        <div className="container">
            <div className="section-header fade-in-up">
                <h2 className="section-title text-center">{t('form_title')}</h2>
                <div className="title-underline center"></div>
                <p className="text-center">{t('form_desc')}</p>
            </div>
            <div className="form-container fade-in-up">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">{t('form_lbl_name')}</label>
                        <input
                          type="text" id="name" required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">{t('form_lbl_phone')}</label>
                        <input
                          type="tel" id="phone" required
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t('form_lbl_message')}</label>
                        <textarea
                          id="message" rows="4" required
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 magnetic-btn" disabled={loading}>
                        {loading ? "Yuborilmoqda..." : t('form_btn_send')}
                    </button>
                    {status.message && (
                      <div className={`form-status ${status.type}`}>{status.message}</div>
                    )}
                </form>
            </div>
        </div>
    </section>
  );
}
