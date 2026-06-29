import Card from '../../../components/ui/Card'

const gaugeSegments = [
  '#81C6A4',
  '#81C6A4',
  '#81C6A4',
  '#81C6A4',
  '#A7D6B8',
  '#DDEDD3',
  '#FFE5A3',
  '#FFD66E',
  '#FFC44D',
  '#FFAA00',
  '#FF6B73',
  '#FF6B73',
  '#FF8B90',
  '#8FD0BC',
  '#8FD0BC',
  '#8FD0BC',
  '#8FD0BC',
  '#8FD0BC',
]

function Gauge({ score, total }) {
  const radius = 42
  const center = 50
  const startAngle = 205
  const sweep = 250
  const step = sweep / (gaugeSegments.length - 1)

  return (
    <div className="relative h-[120px] w-[132px] shrink-0">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {gaugeSegments.map((color, index) => {
          const angle = startAngle + step * index
          const x = center + radius * Math.cos((angle * Math.PI) / 180)
          const y = center + radius * Math.sin((angle * Math.PI) / 180)

          return (
            <rect
              key={`${color}-${index}`}
              x={x - 2}
              y={y - 6.5}
              width="4"
              height="13"
              rx="2"
              fill={color}
              transform={`rotate(${angle + 90} ${x} ${y})`}
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 z-10 flex items-center justify-center pt-[4px]">
        <p className="whitespace-nowrap text-[22px] leading-none text-[#1D2634]">
          <span className="text-[#FFAA00]">{score}</span>
          <span className="text-[17px]"> /{total}</span>
        </p>
      </div>
    </div>
  )
}

export default function InsightCard({ insight }) {
  return (
    <Card className="mt-[10px] grid min-h-[148px] grid-cols-1 items-center gap-[14px] px-[12px] py-[14px] sm:grid-cols-[minmax(0,1fr)_154px]">
      <div className="max-w-[620px]">
        <div className="mb-[15px] flex items-center">
          <p className="text-[10px] leading-none font-medium text-[#7E8898]">{insight.label}</p>
        </div>
        <h2 className="text-[18px] leading-none font-medium tracking-[-0.02em] text-[#1D2634]">
          {insight.title}
        </h2>
        <p className="mt-[15px] text-[10.5px] leading-[1.24] text-[#667185]">
          {insight.description}
        </p>
        <p className="mt-[15px] text-[10px] leading-none text-[#8A94A5]">
          Baseline is {insight.baseline}
        </p>
      </div>
      <div className="flex flex-col items-center self-start pt-[2px] sm:-translate-x-[8px]">
        <span className="mb-[5px] inline-flex rounded-full bg-[#FFECCB] px-[9px] py-[5px] text-[9px] leading-none text-[#FF9A00]">
          <span className="mr-[4px]">.</span>
          {insight.status}
        </span>
        <Gauge score={insight.score} total={insight.total} />
      </div>
    </Card>
  )
}
