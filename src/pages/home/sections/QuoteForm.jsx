import { useState } from 'react'
import { cta, company } from '../../../data/content'
import Button from '../../../components/ui/Button'

const initialForm = {
  pickupLocation: '',
  deliveryLocation: '',
  pickupDate: '',
  weightLbs: '',
  email: '',
}

const fieldClass =
  'w-full rounded-lg border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/35 transition-colors focus:border-aliceBlue/40 focus:outline-none focus:ring-1 focus:ring-aliceBlue/25'

const labelClass =
  'mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45'

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-[28rem] flex-col justify-center rounded-xl border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10">
          <svg
            className="h-7 w-7 text-aliceBlue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold text-white">
          {cta.successTitle}
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/60">
          {cta.successMessage}
        </p>
        <p className="mt-6 text-sm text-white/45">
          Need immediate help?{' '}
          <a href={`tel:${company.phone}`} className="font-medium text-white hover:text-aliceBlue">
            {company.phone}
          </a>
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8"
    >
      <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
        Request a quotation
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="quote-pickup-location" className={labelClass}>
            Pickup City &amp; State, or Zip Code *
          </label>
          <input
            id="quote-pickup-location"
            name="pickupLocation"
            type="text"
            required
            value={form.pickupLocation}
            onChange={updateField('pickupLocation')}
            className={fieldClass}
            placeholder="e.g. Dallas, TX or 75201"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quote-delivery-location" className={labelClass}>
            Delivery City &amp; State, or Zip Code *
          </label>
          <input
            id="quote-delivery-location"
            name="deliveryLocation"
            type="text"
            required
            value={form.deliveryLocation}
            onChange={updateField('deliveryLocation')}
            className={fieldClass}
            placeholder="e.g. Chicago, IL or 60601"
          />
        </div>

        <div>
          <label htmlFor="quote-pickup-date" className={labelClass}>
            Pickup Date *
          </label>
          <input
            id="quote-pickup-date"
            name="pickupDate"
            type="date"
            required
            value={form.pickupDate}
            onChange={updateField('pickupDate')}
            className={`${fieldClass} [color-scheme:dark]`}
          />
        </div>

        <div>
          <label htmlFor="quote-weight-lbs" className={labelClass}>
            Total Shipping Weight (lbs) *
          </label>
          <input
            id="quote-weight-lbs"
            name="weightLbs"
            type="number"
            required
            min="1"
            value={form.weightLbs}
            onChange={updateField('weightLbs')}
            className={fieldClass}
            placeholder="e.g. 42,000"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quote-email" className={labelClass}>
            Email *
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={updateField('email')}
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-white/40">
          All fields are required. We typically respond within one business day.
        </p>
        <Button type="submit" className="shrink-0 sm:min-w-[11rem]">
          {cta.button}
        </Button>
      </div>
    </form>
  )
}
