import { useState } from 'react'

function ContactForm({ className = 'contact-form' }) {
  const [status, setStatus] = useState('idle') // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      e.target.reset()
      setStatus('success')
      setTimeout(() => setStatus('idle'), 4000)
    }, 1200)
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" placeholder="Votre nom *" required />
        <input type="email" placeholder="Votre email *" required />
      </div>
      <input type="text" placeholder="Sujet *" required />
      <textarea rows="5" placeholder="Votre message *" required />
      <button type="submit" className="btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer'}
      </button>
      {status === 'success' && (
        <div className="form-success">✅ Message envoyé avec succès !</div>
      )}
    </form>
  )
}

export default function Contact({ fullPage = false }) {
  if (fullPage) {
    return (
      <main style={{ marginTop: '56px' }}>
        <div className="page-hero">
          <div className="page-hero-overlay" />
        </div>
        <section className="page-section">
          <div className="container">
            <h3>Me contacter</h3>
            <div className="underline center" />
            <div className="contact-grid">
              <div className="contact-form-box">
                <ContactForm className="contact-form-page" />
              </div>
              <div className="contact-info-box">
                <h4>Coordonnées</h4>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>john.doe@gmail.com</p>
                <div className="map-wrapper">
                  <iframe
                    title="Localisation"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=4.79,45.77,4.81,45.78&layer=mapnik"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <section id="contact">
      <div className="container">
        <h3>Me contacter</h3>
        <div className="underline center" />
        <ContactForm />
      </div>
    </section>
  )
}
