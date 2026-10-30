import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="demo-strip">Unofficial educational clone. Not affiliated with Zerodha.</div>
      <nav className="container site-nav" aria-label="Main navigation">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true" />
          <span>Zerodha<span className="brand-sub"> clone</span></span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul id="nav-menu" className={`nav-menu ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={close}
                className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/signup" className="btn-brand nav-cta" onClick={close}>Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
