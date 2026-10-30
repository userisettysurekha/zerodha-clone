import { Link } from 'react-router-dom'

export default function CallToAction({
  title = 'Try the signup demo',
  text = 'See how an account-opening form could look and validate. Nothing is sent or stored.',
  label = 'Go to signup demo',
  to = '/signup',
}) {
  return (
    <section className="cta-band">
      <div className="container text-center">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={to} className="btn-brand">{label}</Link>
      </div>
    </section>
  )
}
