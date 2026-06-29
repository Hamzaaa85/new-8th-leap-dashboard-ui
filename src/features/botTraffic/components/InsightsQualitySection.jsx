import Card from '../../../components/ui/Card'
import CircularScore from '../../../components/ui/CircularScore'
import Icon from '../../../components/ui/Icon'

const badgeClasses = {
  amber: 'bg-[#FFECCB] text-[#F2A000]',
  red: 'bg-[#FFD9D9] text-[#FF626A]',
}

function InsightRow({ item }) {
  return (
    <div className="flex items-center justify-between gap-[11px]">
      <div className="flex min-w-0 items-center gap-[8px]">
        <Icon name={item.icon} className="h-[14px] w-[14px] shrink-0 text-[#455061]" />
        <div className="min-w-0">
          <p className="truncate text-[11px] leading-none text-[#455061]">{item.label}</p>
          {item.helper ? (
            <p className="mt-[3px] text-[7px] leading-none text-[#8A94A5]">{item.helper}</p>
          ) : null}
        </div>
      </div>
      <span
        className={`inline-flex h-[16px] shrink-0 items-center rounded-full px-[8px] text-[8px] leading-none ${
          badgeClasses[item.tone]
        }`}
      >
        <span className="mr-[3px] text-[10px] leading-none">.</span>
        {item.value}
      </span>
    </div>
  )
}

function InsightsPanel({ insights }) {
  return (
    <Card className="min-h-[164px] px-[12px] pt-[15px] pb-[14px]">
      <h2 className="text-[11px] leading-none font-medium text-[#1D2634]">{insights.title}</h2>
      <div className="mt-[16px] space-y-[12px]">
        {insights.items.map((item) => (
          <InsightRow key={item.id} item={item} />
        ))}
      </div>
    </Card>
  )
}

function QualityScoreCard({ score }) {
  return (
    <Card className="min-h-[164px] px-[12px] pt-[13px] pb-[13px]">
      <div className="flex items-center gap-[9px]">
        <span className="flex h-[27px] w-[27px] items-center justify-center rounded-[5px] bg-[#EEF3FA] text-[#455061]">
          <Icon name={score.icon} className="h-[15px] w-[15px]" />
        </span>
        <h3 className="text-[11px] leading-none font-medium text-[#455061]">{score.label}</h3>
      </div>
      <div className="mt-[10px] flex justify-center">
        <CircularScore value={score.value} total={score.total} tone={score.tone} />
      </div>
      <p className="mt-[6px] text-center text-[9px] leading-none text-[#8A94A5]">{score.helper}</p>
    </Card>
  )
}

export default function InsightsQualitySection({ insights, scores }) {
  return (
    <section className="mt-[11px] grid gap-[8px] sm:grid-cols-2 lg:grid-cols-[174px_repeat(4,minmax(0,1fr))]">
      <InsightsPanel insights={insights} />
      {scores.map((score) => (
        <QualityScoreCard key={score.id} score={score} />
      ))}
    </section>
  )
}
