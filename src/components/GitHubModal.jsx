import { useEffect, useState } from 'react'

export default function GithubModal({ onClose }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then(r => r.json())
      .then(d => {
        if (d.login) setData(d)
        else setError(true)
      })
      .catch(() => setError(true))
  }, [])

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      id="github-modal"
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Profil GitHub de John Doe"
      onClick={handleOverlayClick}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">✕</button>
        <h4>Mon profil GitHub</h4>

        <div id="modal-body">
          {!data && !error && <p className="modal-loading">Chargement…</p>}
          {error && <p className="modal-loading">Impossible de charger le profil GitHub.</p>}
          {data && (
            <div className="modal-content">
              <img src={data.avatar_url} alt="Avatar GitHub" className="modal-avatar" />
              <div className="modal-info">
                <p><strong>{data.name || data.login}</strong></p>
                {data.bio && <p>{data.bio}</p>}
                <hr />
                <p>📦 Repos publics : {data.public_repos}</p>
                <p>👥 Followers : {data.followers}</p>
                {data.location && <p>📍 {data.location}</p>}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button className="btn-primary btn-sm" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  )
}
