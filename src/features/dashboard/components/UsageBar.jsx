import Card from '../../../components/ui/Card'

export default function UsageBar({ usage }) {
  const percentage = (usage.current / usage.total) * 100

  return (
    <Card className="mt-[10px] px-[11px] pt-[13px] pb-[14px]">
      <div className="mb-[12px] flex items-center justify-between text-[10px] leading-none text-[#1D2634]">
        <span className="font-medium">{usage.label}</span>
        <span className="text-[#667185]">
          {usage.current} / {usage.total} {usage.description}
        </span>
      </div>
      <div className="h-[7px] overflow-hidden rounded-full bg-[#EEF3FA]">
        <div
          className="h-full rounded-full bg-black"
          style={{ width: `${percentage}%` }}
          aria-label={`${usage.current} of ${usage.total} ${usage.description}`}
        />
      </div>
    </Card>
  )
}
