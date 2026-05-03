const PROJECTS = [
  { title: 'Fresh Food', bg: '#1a1a2e', tech: 'HTML · CSS · JS' },
  { title: 'Restaurant Akira', bg: '#16213e', tech: 'React · PHP' },
  { title: 'Espace bien-être', bg: '#0f3460', tech: 'HTML · CSS' },
  { title: 'SEO', bg: '#533483', tech: 'SEO · Analytics' },
  { title: "Création d'une API", bg: '#2d6a4f', tech: 'Node.js · REST' },
  { title: "Maquette d'un site", bg: '#e76f51', tech: 'Figma · UX' },
]

export default function Portfolio({ fullPage = false, navigate }) {
  if (fullPage) {
    return (
      <main style={{ marginTop: '56px' }}>
        <div className="page-hero">
          <div className="page-hero-overlay" />
        </div>
        <section className="page-section">
          <div className="container">
            <h3>Portfolio</h3>
            <div className="underline center" />
            <div className="portfolio-full-grid">
              {PROJECTS.map(({ title, bg, tech }) => (
                <div className="pf-card" key={title}>
                  <div
                    className="pf-card-img-placeholder"
                    style={{ background: bg }}
                  >
                    {title}
                  </div>
                  <div className="pf-card-body">
                    <h4>{title}</h4>
                    <p>Projet réalisé dans le cadre de ma formation et de mes missions freelance.</p>
                    <span className="pf-tech">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <section id="portfolio">
      <div className="container">
        <h3>Portfolio</h3>
        <div className="underline center" />
        <div className="portfolio-grid">
          {PROJECTS.map(({ title, bg }) => (
            <a
              key={title}
              href="#"
              className="portfolio-card"
              onClick={(e) => { e.preventDefault(); navigate('portfolio') }}
            >
              <div className="portfolio-thumb" style={{ background: bg }} />
              <p>{title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
