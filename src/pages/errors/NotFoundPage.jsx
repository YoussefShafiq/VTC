import { Link } from 'react-router-dom'
import SectionHeading from '../../components/ui/SectionHeading'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-tr from-aliceBlue to-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-xl text-center">
        <div className="mb-8">
          <span className="inline-block rounded-full bg-racingRed/10 px-4 py-2 text-sm font-semibold text-racingRed">
            404
          </span>
        </div>
        <SectionHeading
          title="Page Under Construction"
        //   description="The page you’re looking for doesn’t exist or might have been moved. Let’s help you find your way back."
          align="center"
        />
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-racingRed px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-racingRed/90"
          >
            Go to Homepage
          </Link>
          {/* <Link
            to={{ pathname: '/', hash: 'contact' }}
            className="inline-flex items-center justify-center rounded-full border border-twilightIndigo/15 bg-white px-6 py-3 text-base font-semibold text-twilightIndigo transition hover:border-racingRed hover:text-racingRed"
          >
            Contact Support
          </Link> */}
        </div>
      </div>
    </section>
  )
}