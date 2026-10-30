import { Check } from 'lucide-react'

export default function PricingCard({ title, price, unit, description, features }) {
  return (
    <article className="card-box pricing-card">
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p className="price-unit">{unit}</p>
      <p>{description}</p>
      <ul className="check-list">
        {features.map((f) => (
          <li key={f}><Check size={16} aria-hidden="true" /> {f}</li>
        ))}
      </ul>
    </article>
  )
}
