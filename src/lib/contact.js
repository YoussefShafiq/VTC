import { contactPage } from '../data/content'

export function getContactEndpoint() {
  return contactPage.form.endpoint
}

/**
 * Submit a contact form to the API.
 * Expects JSON: firstName, lastName, email, phone, subject, message
 */
export async function submitContactForm(payload) {
  const response = await fetch(getContactEndpoint(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    let message = 'Unable to send your message. Please try again.'

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
