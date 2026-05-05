import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';

const links = [
  {
    label: 'Email',
    value: 'noahodong6@gmail.com',
    href: 'mailto:noahodong6@gmail.com',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>,
  },
  {
    label: 'LinkedIn',
    value: 'Odong Noah',
    href: 'https://www.linkedin.com/in/odong-noah-6028bb3a8/',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'GitHub',
    value: 'odong-noah',
    href: 'https://github.com/odongnoah',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  },
  {
    label: 'WhatsApp',
    value: '+256 768 182 448',
    href: 'https://wa.me/256768182448',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  },
];

export default function Contact() {
  const initialState = { name: '', email: '', subject: '', message: '' };
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('IDLE');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('LOADING');

    try {
      const response = await fetch("https://formspree.io/f/maqvqybo", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json", 
            "Accept": "application/json" 
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        // RESET fields here so form is clean on success
        setForm(initialState);
        setErrors({});
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    } catch (err) {
      setStatus('ERROR');
    }
  };

  const errorTextStyle = { color: '#ff4d4d', fontSize: '0.75rem', marginTop: '4px', fontWeight: '500' };
  const inputErrorStyle = { borderColor: '#ff4d4d' };

  return (
    <>
      <Head><title>Contact — Odong Noah</title></Head>
      <section className={`section ${styles.page}`}>
        <div className="container">
          <p className="section-label">Get in touch</p>
          <h1 className="section-title">Let&apos;s <span className="gradient-text">Connect</span></h1>
          
          <div className={styles.layout}>
            <div className={styles.linksCol}>
              {links.map(({ label, value, href, icon }) => (
                <a key={label} href={href} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                  <span className={styles.linkIcon}>{icon}</span>
                  <div>
                    <span className={styles.linkLabel}>{label}</span>
                    <span className={styles.linkValue}>{value}</span>
                  </div>
                  <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>

            <div className={styles.formCol}>
              {status === 'SUCCESS' ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>Message sent!</h3>
                  <p>Thank you Noah will reach out shortly.</p>
                  <button className="btn-outline" onClick={() => setStatus('IDLE')}>Send another</button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  {status === 'ERROR' && <div style={{...errorTextStyle, marginBottom: '10px', textAlign: 'center'}}>Failed to send. Please check your connection.</div>}
                  
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="name">Name</label>
                      <input 
                        id="name"
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        placeholder="Your name"
                        style={errors.name ? inputErrorStyle : {}}
                      />
                      {errors.name && <span style={errorTextStyle}>{errors.name}</span>}
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email">Email</label>
                      <input 
                        id="email"
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={handleChange} 
                        placeholder="your@email.com"
                        style={errors.email ? inputErrorStyle : {}}
                      />
                      {errors.email && <span style={errorTextStyle}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="subject">Subject</label>
                    <input 
                      id="subject"
                      name="subject" 
                      value={form.subject} 
                      onChange={handleChange} 
                      placeholder="What is this about?"
                      style={errors.subject ? inputErrorStyle : {}}
                    />
                    {errors.subject && <span style={errorTextStyle}>{errors.subject}</span>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows={5} 
                      value={form.message} 
                      onChange={handleChange} 
                      placeholder="Tell me about your project..."
                      style={errors.message ? inputErrorStyle : {}}
                    />
                    {errors.message && <span style={errorTextStyle}>{errors.message}</span>}
                  </div>
                  
                  <input type="text" name="_gotcha" style={{display:'none'}} />

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    disabled={status === 'LOADING'}
                    style={{width:'100%', justifyContent:'center'}}
                  >
                    {status === 'LOADING' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}