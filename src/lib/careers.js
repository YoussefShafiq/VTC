import { careerPage } from '../data/content'

export function getCareerRole(slug) {
  return careerPage.roles.find((role) => role.id === slug) ?? null
}

export function getCareersApplyEndpoint() {
  return careerPage.application.endpoint
}

/**
 * Submit a job application to the careers API.
 * Expects multipart/form-data with: jobId, firstName, lastName, email, phone, cv, linkedin (optional)
 */
export async function submitJobApplication(formData) {
  const endpoint = getCareersApplyEndpoint()

  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    let message = 'Unable to submit your application. Please try again.'

    try {
      const data = await response.json()
      if (data?.message) message = data.message
    } catch {
      // Non-JSON error response
    }

    throw new Error(message)
  }

  const contentType = response.headers.get('content-type') ?? ''
  if (contentType.includes('application/json')) {
    return response.json()
  }

  return { ok: true }
}
