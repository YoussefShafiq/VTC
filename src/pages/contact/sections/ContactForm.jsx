import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { company, contactPage, cta, routes } from '../../../data/content'
import { submitContactForm } from '../../../lib/contact'
import Button from '../../../components/ui/Button'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const fieldClass =
  'w-full rounded-xl border border-twilightIndigo/10 bg-white px-4 py-3 text-sm text-twilightIndigo placeholder:text-twilightIndigo/35 transition-colors focus:border-twilightIndigo/25 focus:outline-none focus:ring-2 focus:ring-aliceBlue'

const labelClass =
  'mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-twilightIndigo/50'

export default function ContactForm() {
  const { form } = contactPage
  const formId = useId()
  const [fields, setFields] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const updateField = (field) => (event) => {
    setFields((current) => ({ ...current, [field]: event.target.value }))
    if (error) setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setStatus('submitting')

    try {
      await submitContactForm({
        firstName: fields.firstName.trim(),
        lastName: fields.lastName.trim(),
        email: fields.email.trim(),
        phone: fields.phone.trim(),
        subject: fields.subject,
        message: fields.message.trim(),
      })
      setStatus('success')
      setFields(initialForm)
    } catch (submitError) {
      setStatus('idle')
      setError(submitError.message || 'Unable to send your message. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-twilightIndigo/10 bg-white p-8 text-center shadow-[0_8px_32px_-12px_rgba(31,50,88,0.12)] md:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-racingRed/15 bg-racingRed/8">
          <svg className="h-7 w-7 text-racingRed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 font-display text-2xl font-semibold text-twilightIndigo">
          {form.successTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-twilightIndigo/65">
          {form.successMessage}
        </p>
        <p className="mt-6 text-sm text-twilightIndigo/50">
          Need a freight quote?{' '}
          <Link to={{ pathname: routes.home, hash: routes.quoteHash }} className="font-semibold text-racingRed hover:text-racingRed/80">
            Request a quote
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-twilightIndigo/10 bg-white p-6 shadow-[0_8px_32px_-12px_rgba(31,50,88,0.12)] md:p-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-twilightIndigo">
        {form.title}
      </h2>
      <p className="mt-2 text-sm text-twilightIndigo/60">{form.description}</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-first-name`} className={labelClass}>
              First name *
            </label>
            <input
              id={`${formId}-first-name`}
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              value={fields.firstName}
              onChange={updateField('firstName')}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={`${formId}-last-name`} className={labelClass}>
              Last name *
            </label>
            <input
              id={`${formId}-last-name`}
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              value={fields.lastName}
              onChange={updateField('lastName')}
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-email`} className={labelClass}>
              Email *
            </label>
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              value={fields.email}
              onChange={updateField('email')}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor={`${formId}-phone`} className={labelClass}>
              Phone number *
            </label>
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={fields.phone}
              onChange={updateField('phone')}
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${formId}-subject`} className={labelClass}>
            Topic *
          </label>
          <select
            id={`${formId}-subject`}
            name="subject"
            required
            value={fields.subject}
            onChange={updateField('subject')}
            className={fieldClass}
          >
            {form.subjectOptions.map((option) => (
              <option key={option.value || 'default'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${formId}-message`} className={labelClass}>
            Message *
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            required
            rows={5}
            value={fields.message}
            onChange={updateField('message')}
            className={`${fieldClass} resize-y min-h-[8rem]`}
            placeholder="How can we help you?"
          />
        </div>

        {error && (
          <p className="rounded-xl border border-racingRed/20 bg-racingRed/5 px-4 py-3 text-sm text-racingRed" role="alert">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-twilightIndigo/45">
            Looking for a freight quote?{' '}
            <Link to={{ pathname: routes.home, hash: routes.quoteHash }} className="font-semibold text-racingRed hover:text-racingRed/80">
              {cta.navButton}
            </Link>
          </p>
          <Button type="submit" className="shrink-0 justify-center sm:min-w-[11rem]" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : form.submitLabel}
          </Button>
        </div>
      </form>
    </div>
  )
}
