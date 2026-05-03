const PROJECTS = ['Fresh Food', 'Restaurant Akira', 'Espace bien-être', 'SEO', "Création d'une API", "Maquette d'un site"]

export default function Footer({ navigate }) {
  const link = (page, label) => (
    <li key={label}>
      <a href="#" onClick={(e) => { e.preventDefault(); navigate(page) }}>{label}</a>
    </li>
  )

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <h4>John Doe</h4>
          <p>40 rue Laure Diebold<br />69009 Lyon, France<br />10 20 30 40 50<br />john.doe@gmail.com</p>
          <div className="footer-socials">
            <a href="https://github.com/github-john-doe" target="_blank" rel="noopener noreferrer nofollow" aria-label="GitHub">
              <i className="bi bi-github" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Twitter">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="LinkedIn">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Liens utiles</h4>
          <ul>
            {link('home', 'Accueil')}
            {link('services', 'Services')}
            {link('portfolio', 'Portfolio')}
            {link('contact', 'Me contacter')}
            {link('mentions', 'Mentions légales')}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Mes dernières réalisations</h4>
          <ul>
            {PROJECTS.map(p => link('portfolio', p))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 John Doe – Tous droits réservés</p>
      </div>
    </footer>
  )
}
