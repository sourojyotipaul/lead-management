const BASE_URL = '/leads'

async function parseApiError(response) {
  let detail = `Request failed with status ${response.status}`
  try {
    const data = await response.json()
    if (typeof data.detail === 'string') {
      detail = data.detail
    } else if (Array.isArray(data.detail)) {
      detail = data.detail
        .map((err) => `${err.loc?.[err.loc.length - 1] ?? 'field'}: ${err.msg}`)
        .join('; ')
    }
  } catch {
    // response body wasn't JSON, keep default message
  }
  return new Error(detail)
}

export async function getLeads() {
  const response = await fetch(BASE_URL)
  if (!response.ok) {
    throw await parseApiError(response)
  }
  return response.json()
}

export async function getLeadById(leadId) {
  const response = await fetch(`${BASE_URL}/${leadId}`)
  if (!response.ok) {
    throw await parseApiError(response)
  }
  return response.json()
}

export async function createLead(payload) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    throw await parseApiError(response)
  }
  return response.json()
}
