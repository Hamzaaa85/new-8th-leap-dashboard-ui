import Icon from '../../../components/ui/Icon'

const toneClasses = {
  cream: 'bg-[#FFECCB]',
  pink: 'bg-[#F8CBD5]',
  purple: 'bg-[#E9CEF4]',
  slate: 'bg-[#EAF0F8]',
}

export default function CitationMetricCard({ metric, compact = false }) {
  return (
    <article
      className={`flex min-h-[72px] items-center justify-between rounded-[9px] px-[14px] ${
        toneClasses[metric.tone] ?? toneClasses.slate
      }`}
    >
      <div className="flex min-w-0 items-center gap-[14px]">
        <span className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-[5px] bg-white/52 text-[#667185]">
          <Icon name={metric.icon} className="h-[15px] w-[15px]" />
        </span>
        <div>
          <p className={`${compact ? 'text-[26px]' : 'text-[32px]'} leading-none font-medium tracking-[-0.03em] text-[#222733]`}>
            {metric.value}
          </p>
          <p className="mt-[13px] text-[11px] leading-none text-[#667185]">{metric.label}</p>
        </div>
      </div>
      <span className="flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full bg-[#17191F] text-white">
        <Icon name="info" className="h-[10px] w-[10px]" strokeWidth={1.7} />
      </span>
    </article>
  )
}
