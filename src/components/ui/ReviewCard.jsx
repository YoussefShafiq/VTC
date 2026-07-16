import StarRating from './StarRating'
import { formatReviewDate } from '../../data/reviews'

function authorInitial(author = '') {
  return author.trim().charAt(0).toUpperCase() || 'V'
}

export default function ReviewCard({
  review,
  index = 0,
  tone = 'light',
}) {
  const isDark = tone === 'dark'
  const border = isDark ? 'border-white/10' : 'border-twilightIndigo/8'
  const surface = isDark
    ? 'bg-white/[0.06] hover:border-white/20 hover:bg-white/[0.1]'
    : 'bg-white hover:border-twilightIndigo/16 hover:shadow-[0_16px_44px_-16px_rgba(31,50,88,0.18)]'
  const quote = isDark ? 'text-white/80' : 'text-twilightIndigo/70'
  const meta = isDark ? 'text-white/50' : 'text-twilightIndigo/40'
  const name = isDark ? 'text-white/85' : 'text-twilightIndigo'
  const avatar = isDark
    ? 'border-white/15 bg-white/8 text-aliceBlue'
    : 'border-twilightIndigo/10 bg-aliceBlue/60 text-twilightIndigo/70'
  const watermark = isDark
    ? 'text-white/[0.04] group-hover:text-racingRed/10'
    : 'text-twilightIndigo/[0.04] group-hover:text-racingRed/10'
  const divider = isDark ? 'border-white/10' : 'border-twilightIndigo/8'

  return (
    <blockquote
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 md:p-7 ${border} ${surface}`}
    >
      <span
        className={`absolute right-5 top-4 font-display text-4xl font-semibold transition-colors duration-300 ${watermark}`}
        aria-hidden
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <StarRating rating={review.rating} />

      <p className={`mt-5 flex-1 text-sm leading-relaxed md:text-base ${quote}`}>
        &ldquo;{review.text}&rdquo;
      </p>

      <footer className={`mt-6 flex items-center gap-3 border-t pt-5 ${divider}`}>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full border font-display text-xs font-semibold ${avatar}`}
        >
          {authorInitial(review.author)}
        </span>
        <div className="min-w-0">
          <p className={`text-sm font-semibold ${name}`}>{review.author}</p>
          <p className={`text-xs ${meta}`}>
            {formatReviewDate(review.date)}
            {review.source === 'google' ? ' · Google' : ''}
          </p>
        </div>
      </footer>
    </blockquote>
  )
}
