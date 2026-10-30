import { Link } from 'react-router-dom'


function HeroIllustration() {
  const bars = [30, 52, 40, 68, 55, 82, 74, 96]
  return (
    <svg className="hero-art" viewBox="0 0 480 340" role="img" aria-label="Illustration of a stock chart on a screen">
      <rect x="10" y="10" width="460" height="300" rx="14" fill="#fff" stroke="#d9dee7" strokeWidth="2" />
      <rect x="10" y="10" width="460" height="38" rx="14" fill="#eef3fb" />
      <circle cx="34" cy="29" r="5" fill="#c5ced9" />
      <circle cx="52" cy="29" r="5" fill="#c5ced9" />
      <circle cx="70" cy="29" r="5" fill="#c5ced9" />
      {bars.map((h, i) => (
        <rect key={i} x={50 + i * 48} y={280 - h * 2} width="26" height={h * 2} rx="4" fill="#dbe7f8" />
      ))}
      <polyline
        points="60,230 108,200 156,215 204,160 252,175 300,120 348,135 420,70"
        fill="none" stroke="#1d5fbf" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="420" cy="70" r="8" fill="#1d5fbf" />
    </svg>
  )
}

export default function Hero({ title, text, ctaLabel, ctaTo, secondaryLabel, secondaryTo }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-lg-6">
            <h1>{title}</h1>
            <p className="hero-text">{text}</p>
            <div className="hero-actions">
              <Link to={ctaTo} className="btn-brand">{ctaLabel}</Link>
              {secondaryLabel && <Link to={secondaryTo} className="btn-outline-brand">{secondaryLabel}</Link>}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
