import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'HOME', page: 'home' },
  { label: 'SERVICES', page: 'services' },
  { label: 'PORTFOLIO', page: 'portfolio' },
  { label: 'CONTACT', page: 'contact' },
  { label: 'MENTIONS LÉGALES', page: 'mentions' },
]

export default function Header({ currentPage, navigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest('#main-nav') && !e.target.closest('#hamburger-btn')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [])

  const handleNav = (page) => {
    navigate(page)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      id="header"
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: scrolled ? 'rgba(10, 10, 20, 0.97)' : 'rgba(10, 10, 20, 0.92)',
        backdropFilter: 'blur(6px)',
        padding: '14px 40px',
        transition: 'background 0.3s',
      }}
    >
      {/* Logo — ramène à l'accueil (critère évaluation) */}
      <span
        className="navbar-brand nav-brand"
        style={{ cursor: 'pointer' }}
        onClick={() => handleNav('home')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleNav('home')}
        aria-label="Retour à l'accueil"
      >
        JOHN DOE
      </span>

      {/* Hamburger Bootstrap — fonctionnel sur mobile/tablette */}
      <button
        id="hamburger-btn"
        className="navbar-toggler"
        type="button"
        aria-label="Menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ border: '1px solid rgba(255,255,255,0.3)', padding: '6px 10px' }}
      >
        <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
      </button>

      {/* Menu collapsible Bootstrap */}
      <div
        id="main-nav"
        className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}
        style={
          menuOpen
            ? {
                display: 'block',
                background: 'rgba(10, 10, 20, 0.98)',
                padding: '16px 0',
                borderRadius: '4px',
                marginTop: '8px',
              }
            : {}
        }
      >
        <ul className="navbar-nav ms-auto gap-lg-2">
          {NAV_LINKS.map(({ label, page }) => (
            <li className="nav-item" key={page}>
              <a
                className={`nav-link${currentPage === page ? ' active' : ''}`}
                href="#"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: currentPage === page ? 700 : 600,
                  color: currentPage === page ? '#fff' : '#ccc',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textDecoration: currentPage === page ? 'underline' : 'none',
                  padding: '8px 12px',
                }}
                onClick={(e) => { e.preventDefault(); handleNav(page) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
