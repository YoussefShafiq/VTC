import { company, navLinks, regions } from '../../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="bg-twilightIndigo text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-racingRed text-lg font-bold">
                V
              </span>
              <div>
                <p className="font-display text-xl font-semibold">{company.name}</p>
                <p className="text-sm text-white/50">Asset-based logistics · Since {company.since}</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              Serving the NY/NJ port region with drayage, intermodal, OTR, LTL, and warehouse-backed distribution — with clarity, accountability, and follow-through.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-racingRed">
              Navigation
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-racingRed">
              Headquarters
            </p>
            <address className="not-italic text-sm leading-relaxed text-white/70">
              {company.address.line1}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
            </address>
            <div className="mt-4 space-y-1 text-sm">
              <a href={`tel:${company.phone}`} className="block text-white/80 hover:text-white">
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="block text-white/80 hover:text-white">
                {company.email}
              </a>
            </div>
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/45">
                Primary operating region
              </p>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <span
                    key={region}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Piscataway, NJ · NY/NJ Port Region</p>
        </div>
      </div>
    </footer>
  )
}
