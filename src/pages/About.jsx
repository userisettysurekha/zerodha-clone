import { Target, Eye } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import TeamCard from '../components/TeamCard.jsx'
import CallToAction from '../components/CallToAction.jsx'
import '../styles/About.css'

// Fictional placeholder team members for layout demonstration.
const team = [
  { name: 'Asha Rao', role: 'Frontend lead (placeholder)', bio: 'Keeps components small, reusable and easy to read.' },
  { name: 'Ravi Menon', role: 'UI designer (placeholder)', bio: 'Focuses on spacing, contrast and calm layouts.' },
  { name: 'Neha Iyer', role: 'Content writer (placeholder)', bio: 'Turns finance terms into plain language.' },
  { name: 'Karan Shah', role: 'QA tester (placeholder)', bio: 'Checks every route and form on every screen size.' },
]

export default function About() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <h1>About this project</h1>
          <p className="lead-text">
            This site is an unofficial, educational clone created to practise frontend development with
            React, Vite and Bootstrap. It is not affiliated with Zerodha and does not offer financial services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-narrow">
          <SectionHeading title="Background" align="start" />
          <p>
            The project recreates the look and feel of a minimalist stockbroking website using original
            CSS and SVG artwork. All names, numbers and team members are placeholders.
          </p>
          <p>
            The goal is to show clean component structure, working routing, responsive layouts and
            form validation in a project that a beginner can read from top to bottom.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="card-box h-100">
                <Target size={28} className="accent-icon" aria-hidden="true" />
                <h3>Mission</h3>
                <p>Demonstrate how a clear, accessible financial website can be built with simple, maintainable code.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-box h-100">
                <Eye size={28} className="accent-icon" aria-hidden="true" />
                <h3>Vision</h3>
                <p>Help new developers see how reusable components turn a long design into a short, tidy codebase.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Meet the team" subtitle="Fictional profiles used to show the team card layout." />
          <div className="row g-4">
            {team.map((member) => (
              <div className="col-12 col-sm-6 col-lg-3" key={member.name}>
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction title="Explore the products" text="See the four product ideas featured in this demo." label="View products" to="/products" />
    </>
  )
}
