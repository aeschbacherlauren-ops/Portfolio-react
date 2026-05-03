import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import GithubModal from './components/GithubModal.jsx'

export default function App() {
  const [page, setPage] = useState('home')
  const [modalOpen, setModalOpen] = useState(false)

  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Header currentPage={page} navigate={navigate} />

      {page === 'home' && (
        <>
          <Hero onEnSavoirPlus={() => setModalOpen(true)} />
          <About />
          <Services />
          <Portfolio navigate={navigate} />
          <Contact />
        </>
      )}

      {page === 'services' && <Services fullPage />}
      {page === 'portfolio' && <Portfolio fullPage />}
      {page === 'contact' && <Contact fullPage />}
      {page === 'mentions' && <MentionsLegales />}

      <Footer navigate={navigate} />

      {modalOpen && <GithubModal onClose={() => setModalOpen(false)} />}
    </>
  )
}

function MentionsLegales() {
  const items = [
    {
      title: "Éditeur du site",
      content: "John Doe – 40 rue Laure Diebold, 69009 Lyon, France. Email : john.doe@gmail.com. Tél : 10 20 30 40 50."
    },
    {
      title: "Hébergement",
      content: "Ce site est hébergé par un prestataire tiers. Les coordonnées de l'hébergeur sont disponibles sur demande."
    },
    {
      title: "Propriété intellectuelle",
      content: "L'ensemble des contenus présents sur ce site (textes, images, graphismes) sont protégés par le droit d'auteur. Toute reproduction est interdite sans autorisation."
    },
    {
      title: "Données personnelles",
      content: "Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers."
    },
    {
      title: "Cookies",
      content: "Ce site n'utilise pas de cookies à des fins publicitaires ou de tracking. Des cookies techniques peuvent être utilisés pour le bon fonctionnement du site."
    }
  ]

  const [open, setOpen] = useState(null)

  return (
    <main style={{ marginTop: '56px' }}>
      <div className="page-hero">
        <div className="page-hero-overlay" />
      </div>
      <section className="page-section">
        <div className="container">
          <h3>Mentions légales</h3>
          <div className="underline" />
          <div className="accordion">
            {items.map((item, i) => (
              <div className={`accordion-item${open === i ? ' open' : ''}`} key={i}>
                <button className="accordion-header" onClick={() => setOpen(open === i ? null : i)}>
                  {item.title}
                  <span className="accordion-icon">{open === i ? '▲' : '▼'}</span>
                </button>
                {open === i && (
                  <div className="accordion-body">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

