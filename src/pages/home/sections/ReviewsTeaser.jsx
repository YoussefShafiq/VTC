import { Link } from 'react-router-dom'
import { routes } from '../../../data/content'
import {
  getFeaturedReviews,
  reviewsSection,
} from '../../../data/reviews'
import SectionHeading from '../../../components/ui/SectionHeading'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'
import ReviewCard from '../../../components/ui/ReviewCard'
import Button from '../../../components/ui/Button'

export default function ReviewsTeaser() {
  const items = getFeaturedReviews(3)
  if (items.length === 0) return null

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-twilightIndigo/8" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={reviewsSection.eyebrow}
          title="Trusted by shippers across the region"
          description="A sample of Google reviews — including critical ones — so you can judge our service from real experience."
        />

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((review, index) => (
            <StaggerItem key={review.id}>
              <ReviewCard review={review} index={index} tone="light" />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Button
            to={{ pathname: routes.services, hash: routes.reviewsHash }}
            variant="outline"
          >
            {reviewsSection.ctaLabel}
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-twilightIndigo/40">
          <Link
            to={{ pathname: routes.services, hash: routes.reviewsHash }}
            className="underline decoration-twilightIndigo/20 underline-offset-2 transition-colors hover:text-racingRed hover:decoration-racingRed"
          >
            {reviewsSection.attribution}
          </Link>
        </p>
      </div>
    </section>
  )
}
