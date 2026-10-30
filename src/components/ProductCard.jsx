import { useState } from 'react'
import { Link } from 'react-router-dom'

// compact = true: small card that links to the Products page.
// compact = false: "Learn more" expands a feature list in place.
export default function ProductCard({ product, compact = false }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = product.icon
  const detailsId = `details-${product.id}`

  return (
    <article className="card-box product-card">
      <div className="product-visual" aria-hidden="true">
        <Icon size={36} strokeWidth={1.75} />
      </div>
      <h3>{product.name}</h3>
      <p className="product-tagline">{product.tagline}</p>
      <p>{product.description}</p>

      {compact ? (
        <Link to="/products" className="text-link">Learn more</Link>
      ) : (
        <>
          <button
            type="button"
            className="btn-outline-brand btn-small"
            aria-expanded={expanded}
            aria-controls={detailsId}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? 'Show less' : 'Learn more'}
          </button>
          <div id={detailsId} className="product-details" hidden={!expanded}>
            <ul>
              {product.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </>
      )}
    </article>
  )
}
