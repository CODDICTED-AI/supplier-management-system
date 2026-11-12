import { site } from '@/lib/site'
import { GLYPH_VIEWBOX, glyphPaths, type GlyphName } from './glyphs'

/** One of the two brand characters (医 or 路) as a scalable vector, coloured with `currentColor`. */
export function Glyph({ name, className = '' }: { name: GlyphName; className?: string }) {
  return (
    <svg viewBox={GLYPH_VIEWBOX} aria-hidden="true" focusable="false" className={className}>
      <path d={glyphPaths[name]} fill="currentColor" />
    </svg>
  )
}

/** Brand mark: a vermilion seal carrying the character 医 ("medicine"). */
export function Seal({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false" className={className}>
      <rect width="40" height="40" rx="3" className="fill-seal" />
      <svg x="4" y="4" width="32" height="32" viewBox={GLYPH_VIEWBOX}>
        <path d={glyphPaths.yi} fill="#fff" />
      </svg>
    </svg>
  )
}

/** Seal + wordmark. The Chinese name is added on the Chinese site. */
export function Wordmark({ showChinese = false, inverted = false }: { showChinese?: boolean; inverted?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Seal className="size-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.25rem] font-semibold tracking-[-0.02em] ${inverted ? 'text-white' : 'text-ink'}`}
          lang="en"
          dir="ltr"
        >
          {site.name}
        </span>
        {showChinese && (
          <span className={`mt-1.5 text-xs tracking-[0.2em] ${inverted ? 'text-white/70' : 'text-ink-mute'}`}>
            {site.nameZh}
          </span>
        )}
      </span>
    </span>
  )
}
