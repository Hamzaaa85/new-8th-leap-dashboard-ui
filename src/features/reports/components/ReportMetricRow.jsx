import Icon from '../../../components/ui/Icon'

const toneText = {
  green: 'text-[#16A34A]',
  blue: 'text-[#2563EB]',
}

function MetricIcon({ name }) {
  return (
    <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px] bg-[#EEF3FA] text-[#667185]">
      <Icon name={name} className="h-[15px] w-[15px]" />
    </span>
  )
}

function TrendRow({ metric }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <MetricIcon name={metric.icon} />
        <span className="text-[12px] font-medium text-[#1D2634]">{metric.label}</span>
      </div>
      <div className="flex items-center gap-[12px]">
        <span className="text-[12px] font-semibold text-[#1D2634]">
          {metric.from} → {metric.to}
        </span>
        <span className="flex items-center gap-[4px] text-[11px] font-semibold text-[#16A34A]">
          <Icon name="arrowUp" className="h-[12px] w-[12px]" />
          {metric.trend.value}
        </span>
      </div>
    </div>
  )
}

function SimpleRow({ metric }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <MetricIcon name={metric.icon} />
        <span className="text-[12px] font-medium text-[#1D2634]">{metric.label}</span>
      </div>
      <div className="flex items-center gap-[5px]">
        <span className="text-[12px] font-semibold text-[#1D2634]">{metric.primary}</span>
        <span className="text-[11px] text-[#667185]">{metric.secondary}</span>
      </div>
    </div>
  )
}

function TagsRow({ metric }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[10px]">
        <MetricIcon name={metric.icon} />
        <span className="text-[12px] font-medium text-[#1D2634]">{metric.label}</span>
      </div>
      <div className="flex items-center gap-[16px]">
        {metric.tags.map((tag) => (
          <span key={tag.label} className="flex items-center gap-[4px]">
            <span className="text-[12px] font-semibold text-[#1D2634]">{tag.value}</span>
            <span className={`text-[11px] font-medium ${toneText[tag.tone] ?? 'text-[#667185]'}`}>
              {tag.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ReportMetricRow({ metric }) {
  return (
    <div className="py-[15px]">
      {metric.type === 'trend' && <TrendRow metric={metric} />}
      {metric.type === 'simple' && <SimpleRow metric={metric} />}
      {metric.type === 'tags' && <TagsRow metric={metric} />}
    </div>
  )
}
