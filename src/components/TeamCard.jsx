export default function TeamCard({ name, role, bio }) {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <article className="card-box team-card">
      <div className="avatar" aria-hidden="true">{initials}</div>
      <h3>{name}</h3>
      <p className="product-tagline">{role}</p>
      <p>{bio}</p>
    </article>
  )
}
