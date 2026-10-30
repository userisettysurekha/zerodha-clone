import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container text-center">
        <Compass size={48} className="accent-icon" aria-hidden="true" />
        <h1>404</h1>
        <p className="lead-text">We could not find that page. It may have moved, or the address may be mistyped.</p>
        <Link to="/" className="btn-brand">Go to home</Link>
      </div>
    </section>
  )
}
