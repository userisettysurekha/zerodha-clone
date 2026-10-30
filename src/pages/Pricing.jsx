import SectionHeading from '../components/SectionHeading.jsx'
import PricingCard from '../components/PricingCard.jsx'
import CallToAction from '../components/CallToAction.jsx'
import { brokerageCards, chargeRows } from '../data/pricing.js'
import '../styles/Pricing.css'

export default function Pricing() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <h1>Pricing</h1>
          <p className="lead-text">
            A sample layout for brokerage and charges. It shows how pricing information can be organised clearly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice" role="note">
            <strong>Disclaimer:</strong> All figures on this page are illustrative and for a UI demo only.
            They are not current official rates. Verify every charge against the official pricing of a
            registered broker before making decisions.
          </div>

          <SectionHeading title="Brokerage" subtitle="Example cards" />
          <div className="row g-4">
            {brokerageCards.map((c) => (
              <div className="col-12 col-md-4" key={c.id}>
                <PricingCard {...c} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading title="Charges and fees breakdown" subtitle="Types of charges that usually apply to a trade. Amounts are not listed here." />
          <div className="table-responsive">
            <table className="table charges-table">
              <caption className="visually-hidden">Types of charges and where they apply</caption>
              <thead>
                <tr>
                  <th scope="col">Charge</th>
                  <th scope="col">Applies to</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                {chargeRows.map((r) => (
                  <tr key={r.charge}>
                    <th scope="row">{r.charge}</th>
                    <td>{r.applies}</td>
                    <td>{r.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
