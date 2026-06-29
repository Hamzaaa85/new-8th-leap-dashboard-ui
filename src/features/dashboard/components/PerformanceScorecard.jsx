import Card from '../../../components/ui/Card'
import Icon from '../../../components/ui/Icon'

const toneClasses = {
  green: 'bg-[#DDF7C9] text-[#7EC92E]',
  amber: 'bg-[#FFECCB] text-[#F2A000]',
  mint: 'bg-[#DDF6EA] text-[#3BC17D]',
  red: 'bg-[#FFE5E5] text-[#FF626A]',
}

const valueClasses = {
  green: 'text-[#36A853]',
  amber: 'text-[#F2A000]',
  mint: 'text-[#26AE74]',
  red: 'text-[#FF626A]',
}

function ScoreMetric({ metric }) {
  return (
    <div className="flex items-center gap-[12px]">
      <span
        className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full ${toneClasses[metric.tone]}`}
      >
        <Icon name={metric.icon} className="h-[15px] w-[15px]" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[12px] leading-none font-medium text-[#455061]">{metric.label}</p>
          <p className={`text-[12px] leading-none font-medium ${valueClasses[metric.tone]}`}>
            {metric.value}
            <span className="text-[#1D2634]">/{metric.total}</span>
          </p>
        </div>
        <p className="mt-[6px] truncate text-[8px] leading-none text-[#8A94A5]">{metric.helper}</p>
      </div>
    </div>
  )
}

export default function PerformanceScorecard({ scorecard }) {
  return (
    <Card className="mt-[10px] min-h-[215px] px-[12px] pt-[18px] pb-[21px]">
      <p className="text-[10px] leading-none font-medium text-[#7E8898]">{scorecard.label}</p>
      <h2 className="mt-[17px] text-[18px] leading-none font-medium tracking-[-0.02em] text-[#1D2634]">
        {scorecard.title}
      </h2>
      <p className="mt-[14px] max-w-[720px] text-[10.5px] leading-[1.24] text-[#667185]">
        {scorecard.description}
      </p>
      <div className="mx-auto mt-[27px] grid max-w-[540px] grid-cols-1 gap-x-[48px] gap-y-[20px] sm:grid-cols-2">
        {scorecard.metrics.map((metric) => (
          <ScoreMetric key={metric.label} metric={metric} />
        ))}
      </div>
    </Card>
  )
}
