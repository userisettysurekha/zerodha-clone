import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'

const NAME_PATTERN = /^[A-Za-z][A-Za-z .'-]{1,49}$/
const MOBILE_PATTERN = /^[6-9]\d{9}$/

function validate({ name, mobile }) {
  const errors = {}
  const cleanName = name.trim()
  const cleanMobile = mobile.replace(/\s/g, '')

  if (!cleanName) errors.name = 'Enter your full name.'
  else if (!NAME_PATTERN.test(cleanName)) errors.name = 'Use 2 to 50 letters. Spaces, dots and hyphens are allowed.'

  if (!cleanMobile) errors.mobile = 'Enter your mobile number.'
  else if (!MOBILE_PATTERN.test(cleanMobile)) errors.mobile = 'Enter a 10-digit mobile number starting with 6, 7, 8 or 9.'

  return errors
}

export default function Signup() {
  const [values, setValues] = useState({ name: '', mobile: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      // Demo only: nothing is sent, saved or logged.
      setSubmitted(true)
      setValues({ name: '', mobile: '' })
    } else {
      setSubmitted(false)
    }
  }

  return (
    <section className="section signup">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6">
            <h1>Signup demo</h1>
            <p className="lead-text">
              A sample account-opening form that checks its fields before accepting them.
            </p>
            <div className="notice" role="note">
              This is a frontend demo. It does not create a real Zerodha account, and no data is
              collected, stored or sent anywhere. Please do not enter real personal details.
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <form className="card-box signup-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name" name="name" type="text" autoComplete="off"
                  value={values.name} onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && <p id="name-error" className="field-error" role="alert">{errors.name}</p>}
              </div>

              <div className="field">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  id="mobile" name="mobile" type="tel" inputMode="numeric" maxLength={12} autoComplete="off"
                  value={values.mobile} onChange={handleChange}
                  aria-invalid={Boolean(errors.mobile)}
                  aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                />
                {errors.mobile && <p id="mobile-error" className="field-error" role="alert">{errors.mobile}</p>}
              </div>

              <button type="submit" className="btn-brand w-100">Continue</button>

              {submitted && (
                <p className="form-success" role="status">
                  Looks good. This was a demo, so nothing was saved or submitted.
                </p>
              )}
            </form>
            <p className="signup-back"><Link to="/" className="text-link">Back to home</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}
