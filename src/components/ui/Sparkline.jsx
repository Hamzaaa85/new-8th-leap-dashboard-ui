import { useId } from 'react'

function buildPath(points, width, height, padding) {
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const step = (width - padding * 2) / (points.length - 1)

  return points
    .map((point, index) => {
      const x = padding + step * index
      const y = height - padding - ((point - min) / range) * (height - padding * 2)
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
    })
    .join(' ')
}

export default function Sparkline({ points }) {
  const gradientId = `sparkline-${useId().replaceAll(':', '')}`
  const width = 150
  const height = 55
  const padding = 4
  const linePath = buildPath(points, width, height, padding)
  const areaPath = `${linePath} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-[55px] w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#71C7A4" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#71C7A4" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path d={linePath} fill="none" stroke="#80C9A8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </svg>
  )
}
