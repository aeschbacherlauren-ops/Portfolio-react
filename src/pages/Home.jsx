import { useEffect, useRef, useState } from 'react'

const SKILLS = [
  { label: 'HTML5', percent: 90, cls: 'html' },
  { label: 'CSS3', percent: 80, cls: 'css' },
  { label: 'JAVASCRIPT', percent: 70, cls: 'js' },
  { label: 'PHP', percent: 60, cls: 'php' },
  { label: 'REACT', percent: 50, cls: 'react' },
]

export default function About() {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-text">
          <h3>A propos</h3>
          <div className="underline" />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=220&fit=crop"
            alt="Photo de John Doe, développeur web full stack"
            className="about-img"
          />
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque a?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque a?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque a?</p>
        </div>

        <div className="skills" ref={ref}>
          <h3>Mes compétences</h3>
          <div className="underline" />
          {SKILLS.map(({ label, percent, cls }) => (
            <div className="skill-item" key={cls}>
              <span className="skill-label">{label} {percent}%</span>
              <div className="skill-bar">
                <div
                  className={`skill-fill ${cls}`}
                  style={{ width: animated ? `${percent}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
