import {
  getPublishedReviews,
  reviewsSection,
} from '../../../data/reviews'
import SectionHeading from '../../../components/ui/SectionHeading'
import AnimateOnScroll from '../../../components/ui/AnimateOnScroll'
import { Stagger, StaggerItem } from '../../../components/ui/Stagger'
import ReviewCard from '../../../components/ui/ReviewCard'

export default function CustomerReviews() {
  const items = getPublishedReviews()
  if (items.length === 0) return null

  return (
    <section
      id="customer-reviews"
      className="relative scroll-mt-28 overflow-hidden bg-[#f6f9ff] py-24 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-twilightIndigo/8" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={reviewsSection.eyebrow}
          title={reviewsSection.title}
          description={reviewsSection.subtitle}
          align="center"
        />

        <AnimateOnScroll variant="fadeUp" className="mb-10 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-twilightIndigo/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-twilightIndigo/55">
            <span className="h-1.5 w-1.5 rounded-full bg-racingRed" aria-hidden />
            {reviewsSection.attribution}
          </p>
        </AnimateOnScroll>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((review, index) => (
            <StaggerItem key={review.id}>
              <ReviewCard review={review} index={index} tone="light" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
