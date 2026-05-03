export default function Hero({ onEnSavoirPlus }) {
  return (
    <section id="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <button className="btn-primary" onClick={onEnSavoirPlus}>
          En savoir plus
        </button>
      </div>
    </section>
  )
}
