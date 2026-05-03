import { useEffect } from 'react'

const sections = [
  {
    id: 'editeur',
    title: 'Éditeur du site',
    content: (
      <>
        <p className="mb-1"><strong>John Doe</strong></p>
        <p className="mb-1"><i className="bi bi-house me-2 text-danger"></i>40 rue Laure Diebold</p>
        <p className="mb-1"><i className="bi bi-geo-alt me-2 text-danger"></i>69009 Lyon, France</p>
        <p className="mb-1"><i className="bi bi-telephone me-2 text-danger"></i>10 20 30 40 50</p>
        <p className="mb-0"><i className="bi bi-envelope me-2 text-danger"></i>john.doe@gmail.com</p>
      </>
    ),
    defaultOpen: true,
  },
  {
    id: 'hebergeur',
    title: 'Hébergeur',
    content: (
      <>
        <p className="mb-1"><strong>OVH SAS</strong></p>
        <p className="mb-1">2 rue Kellermann – 59100 Roubaix – France</p>
        <p className="mb-0">Tél : 1007</p>
      </>
    ),
  },
  {
    id: 'credits',
    title: 'Crédits',
    content: (
      <>
        <p className="mb-1">Conception &amp; développement : <strong>John Doe</strong></p>
        <p className="mb-1">
          Photos :{' '}
          <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>
        </p>
        <p className="mb-0">
          Icônes :{' '}
          <a href="https://icons.getbootstrap.com" target="_blank" rel="noopener noreferrer">
            Bootstrap Icons
          </a>{' '}
          · Favicon :{' '}
          <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener noreferrer">
            Flaticon
          </a>
        </p>
      </>
    ),
  },
]

export default function Mentions() {
  // Injecter noindex dynamiquement (CdC §4.1 – page non indexée)
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => document.head.removeChild(meta)
  }, [])

  return (
    <section className="py-5" style={{ paddingTop: '100px' }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <h3 className="fw-bold text-center">Mentions légales</h3>
        <div className="section-underline mx-auto mb-5"></div>

        {/* Accordéon Bootstrap (CdC §4.1) */}
        <div className="accordion" id="mentionsAccordion">
          {sections.map(({ id, title, content, defaultOpen }) => (
            <div className="accordion-item border-0 mb-2 shadow-sm" key={id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button fw-semibold${defaultOpen ? '' : ' collapsed'}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${id}`}
                  aria-expanded={defaultOpen ? 'true' : 'false'}
                >
                  {title}
                </button>
              </h2>
              <div
                id={id}
                className={`accordion-collapse collapse${defaultOpen ? ' show' : ''}`}
                data-bs-parent="#mentionsAccordion"
              >
                <div className="accordion-body">{content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
