import { useId, useRef, useState } from 'react'
import { careerPage, company } from '../../../../data/content'
import { submitJobApplication } from '../../../../lib/careers'
import Button from '../../../../components/ui/Button'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  linkedin: '',
}

const fieldClass =
  'w-full rounded-xl border border-twilightIndigo/10 bg-white px-4 py-3 text-sm text-twilightIndigo placeholder:text-twilightIndigo/35 transition-colors focus:border-twilightIndigo/25 focus:outline-none focus:ring-2 focus:ring-aliceBlue'

const labelClass =
  'mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-twilightIndigo/50'

function validateCv(file, application) {
  if (!file) return 'Please attach your CV.'

  const maxBytes = application.maxCvSizeMb * 1024 * 1024
  if (file.size > maxBytes) {
    return `CV must be smaller than ${application.maxCvSizeMb} MB.`
  }

  const extension = `.${file.name.split('.').pop()?.toLowerCase() ?? ''}`
  if (!application.acceptedCvTypes.includes(extension)) {
    return `Please upload a file in one of these formats: ${application.acceptedCvTypes.join(', ')}`
  }

  return null
}

export default function JobApplicationForm({ role }) {
  const { application } = careerPage
  const formId = useId()
  const fileInputRef = useRef(null)
  const [form, setForm] = useState(initialForm)
  const [cvFile, setCvFile] = useState(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    if (error) setError('')
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] ?? null
    setCvFile(file)
    if (error) setError('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const cvError = validateCv(cvFile, application)
    if (cvError) {
      setError(cvError)
      return
    }

    const formData = new FormData()
    formData.append('jobId', role.id)
    formData.append('jobTitle', role.title)
    formData.append('firstName', form.firstName.trim())
    formData.append('lastName', form.lastName.trim())
    formData.append('email', form.email.trim())
    formData.append('phone', form.phone.trim())
    if (form.linkedin.trim()) {
      formData.append('linkedin', form.linkedin.trim())
    }
    formData.append('cv', cvFile)

    setStatus('submitting')

    try {
      await submitJobApplication(formData)
      setStatus('success')
      setForm(initialForm)
      setCvFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch (submitError) {
      setStatus('idle')
      setError(submitError.message || 'Unable to submit your application. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div
        id="apply"
        className="rounded-2xl border border-twilightIndigo/10 bg-white p-8 text-center shadow-[0_8px_32px_-12px_rgba(31,50,88,0.12)] md:p-10"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-racingRed/15 bg-racingRed/8">
          <svg className="h-7 w-7 text-racingRed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-6 font-display text-2xl font-semibold text-twilightIndigo">
          {application.successTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-twilightIndigo/65">
          {application.successMessage}
        </p>
        <p className="mt-6 text-sm text-twilightIndigo/50">
          Questions?{' '}
          <a href={`tel:${company.phone}`} className="font-semibold text-twilightIndigo hover:text-racingRed">
            {company.phone}
          </a>
        </p>
      </div>
    )
  }

  return (
    <div
      id="apply"
      className="rounded-2xl border border-twilightIndigo/10 bg-white p-6 shadow-[0_8px_32px_-12px_rgba(31,50,88,0.12)] md:p-8"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/45">
        Apply for this role
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-twilightIndigo">
        {role.title}
      </h2>
      <p className="mt-2 text-sm text-twilightIndigo/60">
        Complete the form below and attach your CV. Fields marked with * are required.
      </p>

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
              value={form.firstName}
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
              value={form.lastName}
              onChange={updateField('lastName')}
              className={fieldClass}
            />
          </div>
        </div>

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
            value={form.email}
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
            value={form.phone}
            onChange={updateField('phone')}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-linkedin`} className={labelClass}>
            LinkedIn profile <span className="normal-case tracking-normal text-twilightIndigo/35">(optional)</span>
          </label>
          <input
            id={`${formId}-linkedin`}
            name="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/your-profile"
            value={form.linkedin}
            onChange={updateField('linkedin')}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor={`${formId}-cv`} className={labelClass}>
            CV attachment *
          </label>
          <input
            ref={fileInputRef}
            id={`${formId}-cv`}
            name="cv"
            type="file"
            required
            accept={application.acceptedCvTypes.join(',')}
            onChange={handleFileChange}
            className="block w-full cursor-pointer rounded-xl border border-dashed border-twilightIndigo/15 bg-aliceBlue/20 px-4 py-3 text-sm text-twilightIndigo/70 file:mr-4 file:rounded-lg file:border-0 file:bg-twilightIndigo file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white hover:file:bg-twilightIndigo/90"
          />
          <p className="mt-2 text-xs text-twilightIndigo/45">{application.cvHint}</p>
          {cvFile && (
            <p className="mt-1 text-xs font-medium text-twilightIndigo/60">
              Selected: {cvFile.name}
            </p>
          )}
        </div>

        {error && (
          <p className="rounded-xl border border-racingRed/20 bg-racingRed/5 px-4 py-3 text-sm text-racingRed" role="alert">
            {error}
          </p>
        )}

        <Button
          type="submit"
          className="w-full justify-center sm:w-auto"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting…' : application.submitLabel}
        </Button>
      </form>
    </div>
  )
}
