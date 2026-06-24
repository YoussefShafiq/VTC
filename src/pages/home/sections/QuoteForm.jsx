import { useState } from 'react'
import { cta, company, quotationForm } from '../../../data/content'
import Button from '../../../components/ui/Button'

const initialForm = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  serviceType: '',
  origin: '',
  destination: '',
  pickupDate: '',
  equipmentType: '',
  weightDimensions: '',
  unitCount: '',
  cargoDescription: '',
  specialRequirements: [],
  notes: '',
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

  const toggleRequirement = (value) => {
    setForm((current) => {
      const selected = current.specialRequirements.includes(value)
        ? current.specialRequirements.filter((item) => item !== value)
        : [...current.specialRequirements, value]

      return { ...current, specialRequirements: selected }
    })
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
        <div>
          <label htmlFor="quote-full-name" className={labelClass}>
            Full name *
          </label>
          <input
            id="quote-full-name"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={form.fullName}
            onChange={updateField('fullName')}
            className={fieldClass}
            placeholder="Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="quote-company" className={labelClass}>
            Company *
          </label>
          <input
            id="quote-company"
            name="companyName"
            type="text"
            required
            autoComplete="organization"
            value={form.companyName}
            onChange={updateField('companyName')}
            className={fieldClass}
            placeholder="Your company"
          />
        </div>

        <div>
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

        <div>
          <label htmlFor="quote-phone" className={labelClass}>
            Phone *
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={updateField('phone')}
            className={fieldClass}
            placeholder="(555) 000-0000"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quote-service" className={labelClass}>
            Service needed *
          </label>
          <select
            id="quote-service"
            name="serviceType"
            required
            value={form.serviceType}
            onChange={updateField('serviceType')}
            className={`${fieldClass} appearance-none`}
          >
            {quotationForm.serviceOptions.map((option) => (
              <option key={option.value || 'default'} value={option.value} className="text-twilightIndigo">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quote-origin" className={labelClass}>
            Origin / pickup *
          </label>
          <input
            id="quote-origin"
            name="origin"
            type="text"
            required
            value={form.origin}
            onChange={updateField('origin')}
            className={fieldClass}
            placeholder="Port, terminal, or address"
          />
        </div>

        <div>
          <label htmlFor="quote-destination" className={labelClass}>
            Destination *
          </label>
          <input
            id="quote-destination"
            name="destination"
            type="text"
            required
            value={form.destination}
            onChange={updateField('destination')}
            className={fieldClass}
            placeholder="Warehouse, DC, or address"
          />
        </div>

        <div>
          <label htmlFor="quote-pickup-date" className={labelClass}>
            Preferred pickup date
          </label>
          <input
            id="quote-pickup-date"
            name="pickupDate"
            type="date"
            value={form.pickupDate}
            onChange={updateField('pickupDate')}
            className={`${fieldClass} [color-scheme:dark]`}
          />
        </div>

        <div>
          <label htmlFor="quote-equipment" className={labelClass}>
            Equipment / container type
          </label>
          <select
            id="quote-equipment"
            name="equipmentType"
            value={form.equipmentType}
            onChange={updateField('equipmentType')}
            className={`${fieldClass} appearance-none`}
          >
            {quotationForm.equipmentOptions.map((option) => (
              <option key={option.value || 'default'} value={option.value} className="text-twilightIndigo">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quote-weight" className={labelClass}>
            Weight / dimensions
          </label>
          <input
            id="quote-weight"
            name="weightDimensions"
            type="text"
            value={form.weightDimensions}
            onChange={updateField('weightDimensions')}
            className={fieldClass}
            placeholder="e.g. 42,000 lbs or 20 pallets"
          />
        </div>

        <div>
          <label htmlFor="quote-units" className={labelClass}>
            Number of units
          </label>
          <input
            id="quote-units"
            name="unitCount"
            type="text"
            inputMode="numeric"
            value={form.unitCount}
            onChange={updateField('unitCount')}
            className={fieldClass}
            placeholder="Containers, trucks, or pallets"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quote-cargo" className={labelClass}>
            Cargo description
          </label>
          <input
            id="quote-cargo"
            name="cargoDescription"
            type="text"
            value={form.cargoDescription}
            onChange={updateField('cargoDescription')}
            className={fieldClass}
            placeholder="Commodity, packaging, and handling notes"
          />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={labelClass}>Special requirements</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {quotationForm.specialRequirements.map((item) => {
              const checked = form.specialRequirements.includes(item.value)

              return (
                <label
                  key={item.value}
                  className={`cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    checked
                      ? 'border-aliceBlue/50 bg-aliceBlue/15 text-white'
                      : 'border-white/15 bg-white/5 text-white/60 hover:border-white/25 hover:text-white/80'
                  }`}
                >
                  <input
                    type="checkbox"
                    name="specialRequirements"
                    value={item.value}
                    checked={checked}
                    onChange={() => toggleRequirement(item.value)}
                    className="sr-only"
                  />
                  {item.label}
                </label>
              )
            })}
          </div>
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor="quote-notes" className={labelClass}>
            Additional notes
          </label>
          <textarea
            id="quote-notes"
            name="notes"
            rows={4}
            value={form.notes}
            onChange={updateField('notes')}
            className={`${fieldClass} resize-y min-h-[6rem]`}
            placeholder="Delivery windows, recurring volume, documentation needs, or other details"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-white/40">
          Fields marked * are required. We typically respond within one business day.
        </p>
        <Button type="submit" className="shrink-0 sm:min-w-[11rem]">
          {cta.button}
        </Button>
      </div>
    </form>
  )
}
