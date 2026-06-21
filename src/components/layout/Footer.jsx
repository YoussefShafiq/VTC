import { company, navLinks, regions } from '../../data/content'
import { FLEET_IMAGE } from '../../lib/images'

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-[center_35%] bg-no-repeat"
        style={{ backgroundImage: `url(${FLEET_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-twilightIndigo/94" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-twilightIndigo via-twilightIndigo/90 to-twilightIndigo/85" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <a href="#" className="inline-block">
              <img
                src="/logo.png"
                alt={company.name}
                width={140}
                height={40}
                className="h-auto w-[120px] md:w-[140px]"
              />
            </a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
              Asset-based logistics serving the NY/NJ port region with drayage, intermodal, OTR, LTL, and warehouse-backed distribution — since {company.since}.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/55 backdrop-blur-sm"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-aliceBlue/60">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-aliceBlue/60">
              Contact
            </p>
            <address className="not-italic text-sm leading-relaxed text-white/60">
              {company.address.line1}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </address>
            <div className="mt-5 space-y-2">
              <a
                href={`tel:${company.phone}`}
                className="block font-display text-lg font-semibold text-white transition-colors hover:text-aliceBlue"
              >
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="block text-sm text-white/60 transition-colors hover:text-white"
              >
                {company.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Piscataway, NJ · NY/NJ Port Region</p>
        </div>
      </div>
    </footer>
  )
}
