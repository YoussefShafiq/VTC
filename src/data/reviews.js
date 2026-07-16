/**
 * Customer reviews (Google) — CMS/dashboard-ready shape.
 * Replace placeholder entries when live reviews are managed from the admin.
 */
export const reviewsSection = {
  eyebrow: 'Customer reviews',
  title: 'What shippers say about Vital',
  subtitle:
    'Reviews from Google — shown as they are. We do not filter by rating so you can see the full picture.',
  attribution: 'Reviews from Google',
  ctaLabel: 'See all reviews',
}

/** @typedef {{ id: string, author: string, rating: number, date: string, text: string, source: 'google', published: boolean, featured?: boolean }} Review */

/** @type {Review[]} */
export const reviews = [
  {
    id: 'placeholder-1',
    author: 'Michael R.',
    rating: 5,
    date: '2025-11-12',
    text: 'Reliable port drayage and clear communication from pickup to delivery. Dispatch stayed ahead of gate times and kept us updated without chasing them.',
    source: 'google',
    published: true,
    featured: true,
  },
  {
    id: 'placeholder-2',
    author: 'Sandra K.',
    rating: 4,
    date: '2025-09-03',
    text: 'Solid warehouse support for seasonal overflow. Pickups were on schedule and the team was flexible when our volume spiked mid-week.',
    source: 'google',
    published: true,
    featured: true,
  },
  {
    id: 'placeholder-3',
    author: 'James T.',
    rating: 2,
    date: '2025-06-18',
    text: 'Delivery was a day late after a terminal delay and we had to follow up twice for an ETA. Freight arrived intact, but communication during the delay needed to be faster.',
    source: 'google',
    published: true,
    featured: true,
  },
  {
    id: 'placeholder-4',
    author: 'Priya N.',
    rating: 5,
    date: '2026-01-22',
    text: 'We use Vital for regional OTR and LTL into NJ/PA. Easy to work with, professional drivers, and quotes come back quickly.',
    source: 'google',
    published: true,
  },
  {
    id: 'placeholder-5',
    author: 'David L.',
    rating: 3,
    date: '2025-04-09',
    text: 'Average experience overall. Capacity was available when we needed it, but scheduling windows were tighter than we expected during peak port volume.',
    source: 'google',
    published: true,
  },
  {
    id: 'placeholder-6',
    author: 'Elena M.',
    rating: 5,
    date: '2025-12-02',
    text: 'Cross-dock and transload handled smoothly. They treated our freight like it mattered and coordinated tightly with our DC appointments.',
    source: 'google',
    published: true,
  },
]

export function getPublishedReviews() {
  return reviews.filter((review) => review.published !== false)
}

export function getFeaturedReviews(limit = 3) {
  const published = getPublishedReviews()
  const featured = published.filter((review) => review.featured)
  const pool = featured.length > 0 ? featured : published
  return pool.slice(0, limit)
}

export function formatReviewDate(isoDate) {
  if (!isoDate) return ''
  const date = new Date(`${isoDate}T00:00:00`)
  if (Number.isNaN(date.getTime())) return isoDate
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
