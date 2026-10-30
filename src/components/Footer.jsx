import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-5">
            <p className="footer-brand">Zerodha clone</p>
            <p className="footer-text">
              A student frontend project built with React and Vite. It is an unofficial,
              educational clone and is not affiliated with, endorsed by, or connected to Zerodha.
            </p>
          </div>
          <div className="col-6 col-md-3">
            <h2 className="footer-heading">Pages</h2>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-4">
            <h2 className="footer-heading">Products (demo)</h2>
            <ul className="footer-links">
              <li><Link to="/products">Kite</Link></li>
              <li><Link to="/products">Console</Link></li>
              <li><Link to="/products">Coin</Link></li>
              <li><Link to="/products">Kite Connect</Link></li>
            </ul>
          </div>
        </div>
        <p className="footer-legal">
          This site does not offer trading, investment advice, or account opening. All figures and names
          shown are illustrative placeholders. Investments in securities markets are subject to market risks.
          Visit the official Zerodha website for real information.
        </p>
      </div>
    </footer>
  )
}
