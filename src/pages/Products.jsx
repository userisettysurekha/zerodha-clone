import SectionHeading from '../components/SectionHeading.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CallToAction from '../components/CallToAction.jsx'
import { products } from '../data/products.js'
import '../styles/Products.css'

export default function Products() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <h1>Products</h1>
          <p className="lead-text">Four product concepts, described in general terms for this demo.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Everything in one place" subtitle="Select Learn more on a card to see its sample features." />
          <div className="row g-4">
            {products.map((p) => (
              <div className="col-12 col-md-6" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
