const toneColors = {
  amber: '#FFD23F',
  green: '#0AA24F',
}

export default function CircularScore({ value, total, tone = 'amber' }) {
  const radius = 39
  const circumference = 2 * Math.PI * radius
  const progress = Math.min(Math.max(value / total, 0), 1)
  const strokeDashoffset = circumference * (1 - progress)

  return (
    <div className="relative h-[103px] w-[103px]">
      <svg viewBox="0 0 104 104" className="-rotate-90">
        <circle
          cx="52"
          cy="52"
          r={radius}
          fill="none"
          stroke="#E5E2DE"
          strokeDasharray="1 4"
          strokeLinecap="round"
          strokeWidth="5"
        />
        <circle
          cx="52"
          cy="52"
          r={radius}
          fill="none"
          stroke={toneColors[tone]}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          strokeWidth="7"
        />
      </svg>
      <p className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-[17px] leading-none text-[#1D2634]">
        <span className={tone === 'green' ? 'text-[#0AA24F]' : 'text-[#FFD23F]'}>{value}</span>
        <span className="ml-[4px] text-[12px]">/ {total}</span>
      </p>
    </div>
  )
}
