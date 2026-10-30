import { Link } from 'react-router-dom'
import { Award, BookOpen, ShieldCheck, Users, Wallet } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import PricingCard from '../components/PricingCard.jsx'
import CallToAction from '../components/CallToAction.jsx'
import { products } from '../data/products.js'
import { brokerageCards } from '../data/pricing.js'
import '../styles/Home.css'

const intro = [
  { icon: Wallet, title: 'Invest in your own way', text: 'Stocks, mutual funds and more, explained in plain language.' },
  { icon: ShieldCheck, title: 'Built on clear practices', text: 'Simple screens that show what you are doing before you do it.' },
  { icon: Users, title: 'Made for beginners', text: 'A layout that stays readable whether you are on a phone or a desktop.' },
]

// Placeholder content for demo layout. These are not real awards.
const awards = [
  { title: 'Award title one', body: 'Placeholder for a recognition shown on this section.' },
  { title: 'Award title two', body: 'Placeholder for a second recognition card.' },
  { title: 'Award title three', body: 'Placeholder for a third recognition card.' },
]

// Illustrative numbers for layout only.
const stats = [
  { value: '1,000+', label: 'Sample figure: active learners' },
  { value: '50+', label: 'Sample figure: lessons' },
  { value: '4', label: 'Products showcased' },
  { value: '5', label: 'Pages in this demo' },
]

const lessons = [
  { title: 'What is a share?', text: 'Understand ownership in a company and why prices move.' },
  { title: 'Reading a candlestick chart', text: 'Learn what open, high, low and close mean on a chart.' },
  { title: 'Mutual funds basics', text: 'See how pooled investing works and what costs to look for.' },
]

export default function Home() {
  return (
    <>
      <Hero
        title="Learn how modern investing platforms are built"
        text="An educational, unofficial frontend project inspired by a minimalist stockbroking website. Explore the pages, products and a demo signup form."
        ctaLabel="Try the signup demo"
        ctaTo="/signup"
        secondaryLabel="View pricing"
        secondaryTo="/pricing"
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="Stockbroking and investing, introduced" subtitle="Three ideas this demo site is built around." />
          <div className="row g-4">
            {intro.map(({ icon: Icon, title, text }) => (
              <div className="col-12 col-md-4" key={title}>
                <div className="card-box h-100">
                  <Icon size={28} className="accent-icon" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Awards and recognition" subtitle="Placeholder cards that show how this section could be laid out." />
          <div className="row g-4">
            {awards.map((a) => (
              <div className="col-12 col-md-4" key={a.title}>
                <div className="card-box h-100">
                  <Award size={28} className="accent-icon" aria-hidden="true" />
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Highlights" subtitle="Sample numbers used to demonstrate a statistics row." />
          <div className="row g-4 text-center">
            {stats.map((s) => (
              <div className="col-6 col-lg-3" key={s.label}>
                <p className="stat-value">{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Products" subtitle="Four product ideas to explore." />
          <div className="row g-4">
            {products.map((p) => (
              <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
                <ProductCard product={p} compact />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Pricing overview" subtitle="Illustrative figures only. Verify against current official pricing." />
          <div className="row g-4">
            {brokerageCards.map((c) => (
              <div className="col-12 col-md-4" key={c.id}>
                <PricingCard {...c} />
              </div>
            ))}
          </div>
          <p className="text-center mt-4">
            <Link to="/pricing" className="text-link">See the full charges breakdown</Link>
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Investment education" subtitle="Short topics to start learning." />
          <div className="row g-4">
            {lessons.map((l) => (
              <div className="col-12 col-md-4" key={l.title}>
                <div className="card-box h-100">
                  <BookOpen size={28} className="accent-icon" aria-hidden="true" />
                  <h3>{l.title}</h3>
                  <p>{l.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
