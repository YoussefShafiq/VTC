import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { feature } from 'topojson-client'
import { geoAlbersUsa, geoPath } from 'd3-geo'
import usAtlas from 'us-atlas/states-albers-10m.json'
import { ports, routes, serviceRegion } from '../../../data/content'

// Matches us-atlas Albers USA projection (975×610 viewport).
const WIDTH = 975
const HEIGHT = 610

const fipsToMeta = Object.fromEntries(
  serviceRegion.states.map((state) => [state.fips, state]),
)

const highlightedFips = new Set(serviceRegion.states.map((state) => state.fips))

export default function ServiceRegionMap() {
  const { title, eyebrow, description, outsideNote, states, hq } = serviceRegion
  const [activeId, setActiveId] = useState(null)

  const { nationPath, stateFeatures, labels, hqPoint } = useMemo(() => {
    // Geometry in states-albers-10m.json is already projected; path needs no projection.
    const path = geoPath()
    const nation = feature(usAtlas, usAtlas.objects.nation)
    const statesCollection = feature(usAtlas, usAtlas.objects.states)

    // Same projection used to bake the atlas — for HQ lat/lng → map coords.
    const projection = geoAlbersUsa().scale(1300).translate([487.5, 305])

    const mappedStates = statesCollection.features.map((stateFeature) => {
      const meta = fipsToMeta[stateFeature.id]
      const highlighted = highlightedFips.has(stateFeature.id)
      const centroid = path.centroid(stateFeature)

      return {
        id: stateFeature.id,
        name: stateFeature.properties.name,
        abbr: meta?.id ?? null,
        highlighted,
        path: path(stateFeature),
        centroid,
      }
    })

    const regionLabels = mappedStates
      .filter((state) => state.highlighted && state.abbr && Number.isFinite(state.centroid[0]))
      .map((state) => ({
        id: state.abbr,
        name: state.name,
        x: state.centroid[0],
        y: state.centroid[1],
      }))

    const projectedHq = projection([hq.longitude, hq.latitude])

    return {
      nationPath: path(nation),
      stateFeatures: mappedStates,
      labels: regionLabels,
      hqPoint: projectedHq && Number.isFinite(projectedHq[0]) ? projectedHq : null,
    }
  }, [hq.latitude, hq.longitude])

  return (
    <section id={serviceRegion.id} className="scroll-mt-28 border-t border-twilightIndigo/10 bg-[#f4f8ff] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-racingRed">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-twilightIndigo md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-twilightIndigo/70 md:text-base">
            {description}
          </p>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <div className="overflow-hidden rounded-2xl border border-twilightIndigo/10 bg-white p-4 shadow-[0_8px_32px_-12px_rgba(31,50,88,0.12)] md:p-6">
            <svg
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className="h-auto w-full"
              role="img"
              aria-label={`U.S. map highlighting the ${title}`}
            >
              {nationPath && (
                <path d={nationPath} fill="#edf3fb" stroke="#1f3258" strokeOpacity="0.12" strokeWidth="1" />
              )}

              {stateFeatures.map((state) => {
                const isActive = activeId === state.abbr
                const isHighlighted = state.highlighted

                return (
                  <path
                    key={state.id}
                    d={state.path}
                    fill={
                      isHighlighted
                        ? isActive
                          ? 'rgba(234, 22, 34, 0.45)'
                          : 'rgba(234, 22, 34, 0.28)'
                        : '#dfeeff'
                    }
                    stroke={isHighlighted ? '#ea1622' : '#1f3258'}
                    strokeOpacity={isHighlighted ? 0.9 : 0.12}
                    strokeWidth={isHighlighted ? 1.25 : 0.6}
                    className={isHighlighted ? 'cursor-pointer transition-colors duration-200' : undefined}
                    onMouseEnter={() => isHighlighted && setActiveId(state.abbr)}
                    onMouseLeave={() => setActiveId(null)}
                    onFocus={() => isHighlighted && setActiveId(state.abbr)}
                    onBlur={() => setActiveId(null)}
                    tabIndex={isHighlighted ? 0 : undefined}
                    aria-label={state.name}
                  />
                )
              })}

              {labels.map((label) => {
                // Skip tiny states that crowd the Northeast; chips cover them.
                if (['RI', 'DE', 'CT', 'NH', 'VT', 'MA'].includes(label.id)) return null

                return (
                  <text
                    key={label.id}
                    x={label.x}
                    y={label.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      pointerEvents: 'none',
                    }}
                    fill="#1f3258"
                  >
                    {label.id}
                  </text>
                )
              })}

              {hqPoint && (
                <g>
                  <circle cx={hqPoint[0]} cy={hqPoint[1]} r="8" fill="#ea1622" />
                  <circle cx={hqPoint[0]} cy={hqPoint[1]} r="3" fill="#ffffff" />
                  <text
                    x={hqPoint[0] + 12}
                    y={hqPoint[1] + 4}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                    }}
                    fill="#1f3258"
                  >
                    {hq.label}
                  </text>
                </g>
              )}
            </svg>

            <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-twilightIndigo/8 pt-4 text-xs text-twilightIndigo/55">
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-racingRed/40 ring-1 ring-racingRed" aria-hidden />
                Core service region
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-racingRed" aria-hidden />
                Headquarters
              </span>
              {activeId && (
                <span className="font-semibold text-twilightIndigo">
                  {states.find((state) => state.id === activeId)?.name}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/45">
                Highlighted states
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {states.map((state) => (
                  <li key={state.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveId(state.id)}
                      onMouseLeave={() => setActiveId(null)}
                      onFocus={() => setActiveId(state.id)}
                      onBlur={() => setActiveId(null)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        activeId === state.id
                          ? 'border-racingRed bg-racingRed text-white'
                          : 'border-twilightIndigo/10 bg-white text-twilightIndigo hover:border-racingRed/30'
                      }`}
                    >
                      <span className={activeId === state.id ? 'text-white/80' : 'text-racingRed'}>
                        {state.id}
                      </span>
                      <span className={`mx-1.5 ${activeId === state.id ? 'text-white/40' : 'text-twilightIndigo/25'}`}>
                        ·
                      </span>
                      {state.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-twilightIndigo/45">
                East Coast ports we serve
              </p>
              <ul className="mt-3 space-y-2">
                {ports.map((port) => (
                  <li key={port} className="flex gap-3 text-sm text-twilightIndigo/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-racingRed" aria-hidden />
                    {port}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-racingRed/15 bg-racingRed/5 p-5 md:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-racingRed">
                Beyond this region
              </p>
              <p className="mt-2 text-sm leading-relaxed text-twilightIndigo/70">
                {outsideNote}
              </p>
              <Link
                to={{ pathname: routes.home, hash: routes.quoteHash }}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-racingRed transition-colors hover:text-racingRed/80"
              >
                Request a quote
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
